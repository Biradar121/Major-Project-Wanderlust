const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlast";
main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((error) => {
        console.log(error);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async ()=>{
   await Listing.deleteMany({});
   initData.data=initData.data.map((obj)=>({...obj,owner: "65465f08fd5711fb4af3f7b1" }));
   await Listing.insertMany(initData.data);
   console.log("data was initlized");
};

initDB();



