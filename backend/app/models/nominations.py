from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, TIMESTAMP, Enum
from sqlalchemy.orm import relationship

from app.core.database import Base
from app.enums import Category, NominationType

class Nomination(Base):
    __tablename__ = 'Nominations'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('Users.id'), nullable=False, unique=True, index=True)
    type = Column(Enum(NominationType), nullable=False)
    category = Column(Enum(Category), nullable=False)
    nomination = Column(String, nullable=False)
    posted_at = Column(TIMESTAMP, nullable=False)

    user = relationship('User', back_populates='nominations')