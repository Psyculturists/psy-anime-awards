from sqlalchemy import Column, Integer, String, Boolean, BIGINT
from sqlalchemy.orm import relationship
from app.core.database import Base

class User(Base):
    __tablename__ = 'Users'
    id = Column(Integer, primary_key=True, index=True)
    discord_id = Column(BIGINT, nullable=False, unique=True, index=True)
    discord_username = Column(String, nullable=False)
    is_member = Column(Boolean, nullable=False)
    twitch_id = Column(BIGINT, nullable=True, unique=True, index=True)
    twitch_username = Column(String, nullable=True)
    is_follower = Column(Boolean, nullable=True)

    nominations = relationship('Nomination', back_populates='user')