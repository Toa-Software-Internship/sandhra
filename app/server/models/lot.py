from typing import Optional 
from datetime import datetime
from pydantic import BaseModel,Field

#Creation of initial Lot Structure
class LotSchema(BaseModel):
    name: str
    block: int =Field(..., gt=0)
    status: str
    active:bool
    created_at:datetime
    created_by:str
    updated_at:datetime
    updated_by:str

#Giving an example of the Schema 
    class Config:
        schema_extra={
            "example":{
                "name":"Bijoy",
                "block": "42",
                "status":"active",
                "active":"1",
                "created_at":"2022-12-27 08:26:49.219717",
                "created_by":"admin",
                "updated_at":"2022-12-28 08:26:49.219717",
                "updated_by":"admin"
            }
        }
#Updation Schema for Put Operation
class UpdateLotSchema(BaseModel):
    name: Optional[str]
    block: Optional[int]
    status: Optional[str]
    active:Optional[bool]
    created_at:Optional[datetime]
    created_by:Optional[str]
    updated_at:Optional[datetime]
    updated_by:Optional[str]

    class Config:
        schema_extra={
            "example":{
                "name":"Bijoy",
                "block" : "43",
                "status":"active",
                "active":"1",
                "created_at":"2022-12-27 08:26:49.219717",
                "created_by":"admin",
                "updated_at":"2022-12-28",
                "updated_by":"admin"
            }
        }
#Define the response message to be obtained        
def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }
#Define the error message to be obtained
def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}