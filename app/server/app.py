from fastapi import FastAPI
from server.routes.lot import router as LotRouter
from server.routes.data import router as DataRouter

app = FastAPI()
#Lot Router and Data Router

app.include_router(DataRouter,tags=["Data"],prefix="/data")
app.include_router(LotRouter,tags=["Lot"],prefix="/lot")


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}
