from fastapi import FastAPI, HTTPException, Response
from dotenv import load_dotenv
from starlette.middleware.sessions import SessionMiddleware

from app.api.routes import front_router, auth_router

load_dotenv()

app = FastAPI()

app.add_middleware(SessionMiddleware, secret_key='idjasiplghiashjfhaoishgfoashofasf')

app.include_router(auth_router, prefix='/api/auth')
app.include_router(front_router)

msg = ['Hello', 'world', 'yes', 'no']

@app.get('/list/{element_id}')
async def elements(element_id: int, response: Response):
     if element_id < 0 or element_id >= len(msg):
         raise HTTPException(403, 'Index out of range')
     return msg[element_id]

