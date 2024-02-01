from bson.objectid import ObjectId

#Defining connection details
import motor.motor_asyncio

MONGO_DETAILS = "mongodb://localhost:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.students

lot_collection = database.get_collection("lots_collection")

#Helper function for parsing 
def lot_helper(lot) -> dict:
    return {
        "id": str(lot["_id"]),,
        "name":lot["name"],
        "block" :lot["block"],
        "status":lot["status"],
        "active":lot["active"],
        "created_at":lot["created_at"],
        "created_by":lot["created_by"],
        "updated_at":lot["updated_at"],
        "updated_by":lot["updated_by"]
        
    }

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
    
#Add a new lot 
async def add_lot(lot_data:dict)->dict:
    lot=await lot_collection.insert_one(lot_data)
    new_lot=await lot_collection.find_one({"_id": lot.inserted_id})
    return lot_helper(lot)

#Updation of lot with matching ID
async def update_lot(id:str,data:dict):
    #Return false if empty requestbody is sent
    if len(data)<1:
        return False
    lot=await lot_collection.find_one({"_id": ObjectId(id)})
    if lot:
        update_lot= await lot_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if update_lot:
            return True
        return False