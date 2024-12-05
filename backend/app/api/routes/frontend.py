from fastapi import APIRouter
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import os

router = APIRouter()

router.mount('/static', StaticFiles(directory='client/dist/assets', html=True), name='assets')

@router.get('/{full_path:path}')
async def serve_react_app():
    return FileResponse(os.path.join('client', 'dist', 'index.html'))