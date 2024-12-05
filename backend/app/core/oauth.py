from authlib.integrations.starlette_client import OAuth
from app.core import settings


oauth = OAuth()

oauth.register(
    name="discord",
    client_id=settings.discord_client_id,
    client_secret=settings.discord_client_secret,
    authorize_url=f"{settings.discord_api_base_url}/oauth2/authorize",
    access_token_url=f"{settings.discord_api_base_url}/oauth2/token",
    client_kwargs={"scope": "identify guilds"},
)

def get_oauth():
    yield oauth