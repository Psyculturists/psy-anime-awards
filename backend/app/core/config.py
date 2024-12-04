from pydantic import BaseSettings

class Settings(BaseSettings):
    app_name: str = 'PsyAnimeAwards'
    database_url: str

    class Config:
        env_file = '.env'

settings = Settings()