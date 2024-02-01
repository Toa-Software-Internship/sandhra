from bson.objectid import ObjectId

# Retrieve all lots present in the database
async def retrieve_lots():
    lots = []
    async for lot in lot_collection.find():
        lots.append(lot_helper(lot))
    return lots

# Retrieve a lot with a matching ID
async def retrieve_lot(id: str) -> dict:
    lot = await lot_collection.find_one({"_id": ObjectId(id)})
    if lot:
        return lot_helper(lot)

# Delete a lot from the database
async def delete_lot(id: str):
    lot = await lot_collection.find_one({"_id": ObjectId(id)})
    if lot:
        await lot_collection.delete_one({"_id": ObjectId(id)})
        return True
