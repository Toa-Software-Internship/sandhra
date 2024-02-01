from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder

#Call functions needed to the router
from app.server.database.lot import (
    add_lot,
    delete_lot,
    retrieve_lots,
    retrieve_lot,
    update_lot,
)
from app.server.models.lot import (
    ErrorResponseModel,
    ResponseModel,
    LotSchema,
    UpdateLotSchema,
)
router = APIRouter()


#Establishing the different opeartions to be done using CRUD 
@router.post("/",response_description="Lot data added into the database")
async def add_lot_data(lot:LotSchema= Body(...)):
    lot=jsonable_encoder(lot)
    new_lot=await add_lot_(lot)
    return ResponseModel(new_lot,"Lot added successfully")

@router.get("/",response_description="Lot retrieved")
async def get_lots():
    lots=await retrieve_lots()
    if lots:
        return ResponseModel(lots,"Lot data retrieved successfully")
    return ResponseModel(lots,"Empty list returned")

@router.get("/{id}", response_description="Lot data retrieved")
async def get_lots_data(id):
    lot=await retrieve_lot(id)
    if lot:
        return ResponseModel(lot,"Lot data retrieved")
    return ErrorResponseModel("Error occurred",404,"Lot doesnot exist")
