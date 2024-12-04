from fastapi import FastAPI, HTTPException, Response, status

app = FastAPI()

msg = ['Hello', 'world', 'yes', 'no']

@app.get("/")
async def root():
    return {'message': "It's alive!"}

@app.get('/list/{element_id}')
async def elements(element_id: int, response: Response):
    if element_id < 0 or element_id >= len(msg):
        response.status_code = status.HTTP_403_FORBIDDEN
        return HTTPException(403, 'Index out of range')
    return msg[element_id]