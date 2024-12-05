from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = 'PsyAnimeAwards'
    debug: bool = False
    database_url: str
    discord_client_id: int
    discord_client_secret: str
    discord_redirect_uri: str
    discord_api_base_url: str
    discord_guild_id: str

    class Config:
        env_file = '.env'

settings = Settings()