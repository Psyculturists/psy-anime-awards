from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models import User
from app.schemas import UserCreate, FullUser

async def create_user(user: UserCreate, db: AsyncSession) -> User:
    query = await db.execute(select(User).where(User.discord_id == user.discord_id))
    existing_user = query.scalars().first()
    if existing_user:
        raise ValueError('User already exists')
    
    new_user = User(**user.model_dump())
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    return new_user

async def update_user(user: UserCreate, db: AsyncSession) -> User:
    query = await db.execute(select(User).where(User.discord_id == user.discord_id))
    existing_user = query.scalars().first()
    if not existing_user:
        raise ValueError('User not found')
    
    existing_user.discord_username = user.discord_username
    existing_user.is_member = user.is_member
    await db.commit()
    await db.refresh(existing_user)
    return existing_user

async def get_user(user_id: int, db: AsyncSession) -> User:
    return await db.get(User, user_id)