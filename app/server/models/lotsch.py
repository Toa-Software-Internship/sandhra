from typing import Optional 
from datetime import date
from pydantic import BaseModel,Field

#Creation of initial Lot Structure
class LotSchema(BaseModel):
    name: str
    block: int =Field(..., gt=0)
    status: str
    active:bool
    created_at:date
    created_by:str
    updated_at:date
    updated_by:str

#Giving an example of the Schema 
    class Confid:
        schema_extra={
            "example":{
                "name":"Bijoy"
                "block":42
                "status":"active"
                "active":"1"
                "created_at":"2022-12-27"
                "created_by":"admin"
                "updated_at":"2022-12-27"
                "updated_by":"admin"
            }
        }
#Updation Schema for Put Operation
class UpdatedLotSchema(BaseModel):
    name: Optional[str]
    block: Optional[int]
    status: Optional[str]
    active:Optional[bool]
    created_at:Optional[date]
    created_by:Optional[str]
    updated_at:Optional[date]
    updated_by:Optional[str]

    class Config
