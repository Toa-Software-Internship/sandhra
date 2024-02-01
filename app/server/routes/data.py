from fastapi import APIRouter,Body
from fastapi.encoders import jsonable_encoder

#Call functions needed to the router
from server.database.data import (
    add_data,
    delete_data,
    retrieve_datas,
    retrieve_data,
    update_data,
)
from server.models.data import (
    ErrorResponseModel,
    ResponseModel,
    DataSchema,
    UpdateDataSchema,
)
router = APIRouter()


#Establishing the different opeartions to be done using CRUD 
@router.post("/",response_description="Data added into the database")
async def add_data_data(data:DataSchema= Body(...)):
    data=jsonable_encoder(data)
    new_data=await add_data(data)
    return ResponseModel(new_data,"Data added successfully")

@router.get("/",response_description="Data retrieved")
async def get_datas():
    datas=await retrieve_datas()
    if datas:
        return ResponseModel(datas,"Data retrieved successfully")
    return ResponseModel(datas,"Empty list returned")

@router.get("/{id}", response_description="Data retrieved")
async def get_datas_data(id):
    data=await retrieve_data(id)
    if data:
        return ResponseModel(data,"Data retrieved")
    return ErrorResponseModel("Error occurred",404,"Doesnot exist")

@router.put("/{id}")
async def update_data_data(id:str,req:UpdateDataSchema= Body(...)):
    req={k: v for k, v in req.dict().items() if v is not None}
    updated_data = await update_data(id, req)
    if updated_data:
        return ResponseModel(
            "Data with ID: {} name update is successful".format(id),
            "Data name updated successfully",
        )
    return ErrorResponseModel(
        "An error occurred",
        404,
        "There was an error updating the Data.",
    )
@router.delete("/{id}", response_description="Data deleted from the database")
async def delete_data_data(id: str):
    deleted_data = await delete_data(id)
    if deleted_data:
        return ResponseModel(
            "Data with ID: {} removed".format(id), "Data deleted successfully"
        )
    return ErrorResponseModel(
        "An error occurred", 404, "Data with id {0} doesn't exist".format(id)
    )
