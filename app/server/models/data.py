from typing import Optional 
from datetime import datetime
from pydantic import BaseModel,Field

#Creation of Initial Data Collection
class DataSchema(BaseModel):
    date: datetime
    lot_id:str
    workdone:str
    yield_obtained:int
    
    class Config:
        schema_extra={
            "example":{
                "date":"2022-12-27 08:26:49.219717",
                "lot_id":"2030",
                "workdone":"harvesting",
                "yield_obtained":50000,
                
            }
        }
#Updation DataSchema for Put Operation
class UpdateDataSchema(BaseModel):
    date:Optional[datetime]
    lot_id:Optional[str]
    workdone:Optional[str]
    yield_obtained:Optional[int]

    class Config:
        schema_extra={
            "example":{
                "date":"2022-12-28 08:26:49.219717",
                "lot_id":"130",
                "workdone":"watering",
                "yield_obtained":"40000",
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

