import httpx
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, Request
from authlib.integrations.starlette_client import OAuth
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.core import get_db, get_oauth, settings
from app.models import User
from app.services import create_user, update_user
from app.schemas import UserCreate

router = APIRouter()

@router.get('/discord')
async def discord_login(request: Request, oauth: Annotated[OAuth, Depends(get_oauth)]):
    return await oauth.discord.authorize_redirect(request, settings.discord_redirect_uri)

@router.get('/discord/callback')
async def discord_callback(request: Request, db: Annotated[AsyncSession, Depends(get_db)], oauth: Annotated[OAuth, Depends(get_oauth)]):
    token = await oauth.discord.authorize_access_token(request)

    async with httpx.AsyncClient() as client:
        headers = {'Authorization': f'Bearer {token['access_token']}'}
        user_response = await client.get(f'{settings.discord_api_base_url}/users/@me', headers=headers)
        guilds_response = await client.get(f'{settings.discord_api_base_url}/users/@me/guilds', headers=headers)

        if user_response.status_code != 200 or guilds_response.status_code != 200:
            raise HTTPException(status_code=400, detail=f'Failed to fetch user infom, {user_response.status_code} | {guilds_response.status_code}')
        
        discord_user = user_response.json()
        guilds = guilds_response.json()

        is_member = any(guild['id'] == settings.discord_guild_id for guild in guilds)

        existing_user = await db.execute(select(User).where(User.discord_id == int(discord_user['id'])))
        user = existing_user.scalars().first()

        schema = UserCreate(discord_id=int(discord_user['id']),
                            discord_username=discord_user['username'],
                            is_member=is_member)
        if not user:
            user = await create_user(schema, db)
        else:
            user = await update_user(schema, db)

        return {'username': user.discord_username, 
                'discord_id': user.discord_id, 
                'is_member': user.is_member}