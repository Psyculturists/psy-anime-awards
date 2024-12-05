from sqlalchemy.ext.asyncio import (
    create_async_engine, 
    AsyncSession,
    async_sessionmaker
    )
from sqlalchemy.orm import sessionmaker, declarative_base

from app.core.config import settings

Base = declarative_base()

# Create the async engine with SQLAlchemy's pool
engine = create_async_engine(
    settings.database_url,  # Use the database URL directly
    echo=True,
    pool_size=5,            # Optional: Configure pool size
    max_overflow=10,        # Optional: Configure overflow
    connect_args={"statement_cache_size": 0},  # Avoid prepared statement issues with PgBouncer
)

# Create a session factory
SessionLocal = async_sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)

# Dependency to provide a database session
async def get_db():
    async with SessionLocal() as session:
        yield session 