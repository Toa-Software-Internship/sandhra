from bson.objectid import ObjectId

#Defining connection details
import motor.motor_asyncio

MONGO_DETAILS = "mongodb://localhost:27017/"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.farm

data_collection = database.get_collection("datas_collection")

#Helper function for parsing 
def data_helper(data) -> dict:
    return {
        "date": data["date"],
        "lot_id": str(["lot_id"]),
        "workdone":data["workdone"],
        "yield_obtained" :data["yield_obtained"]
    }

# Retrieve all data present in the database
async def retrieve_datas():
    datas = []
    async for data in data_collection.find():
        datas.append(data_helper(data))
    return datas

# Retrieve a data with a matching ID
async def retrieve_data(id: str) -> dict:
    data = await data_collection.find_one({"_id": ObjectId(id)})
    if data:
        return data_helper(data)

# Delete a data from the database
async def delete_data(id: str):
    data = await data_collection.find_one({"_id": ObjectId(id)})
    if data:
        await data_collection.delete_one({"_id": ObjectId(id)})
        return True
    
#Add a new data 
async def add_data(data_data:dict)->dict:
    data=await data_collection.insert_one(data_data)
    new_data=await data_collection.find_one({"_id": data.inserted_id})
    return data_helper(data)

#Updation of data with matching ID
async def update_data(id:str,data:dict):
    #Return false if empty requestbody is sent
    if len(data)<1:
        return False
    data=await data_collection.find_one({"_id": ObjectId(id)})
    if data:
        update_data= await data_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if update_data:
            return True
        return False
    