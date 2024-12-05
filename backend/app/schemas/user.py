from pydantic import BaseModel

class UserBase(BaseModel):
    discord_id: int
    discord_username: str
    is_member: bool
    
class UserCreate(UserBase):
    pass

class FullUser(UserBase):
    twitch_id: int
    twitch_username: str
    is_follower: bool

class UserRead(FullUser):
    id: int

    class Config:
        orm_mode = True