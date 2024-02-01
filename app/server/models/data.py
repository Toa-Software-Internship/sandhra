from typing import Optional 
from datetime import datetime
from pydantic import BaseModel,Field

#Creation of Initial Date Collection
class DataSchema(BaseModel):
    date: datetime
    lot_id:int
    workdone:str
    yield_obtained:int
    lot_id:int
    
    class Config:
        schema_extra={
            "example":{
                "date":"2022-12-27 08:26:49.219717",
                "lot_id":"2030"
                "workdone":"harvesting",
                "yield_obtained":"50000",
                
            }
        }
    
