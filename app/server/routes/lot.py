from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
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