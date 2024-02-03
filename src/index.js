
import dotenv from "dotenv";
import ConnectDB from "./db/index.js";
import express from "express";

const app = express()

dotenv.config({
    path: './env'
}
)
app.listen(process.env.PORT,()=>{
    console.log("Server running on port: ",process.env.PORT)
   
})

ConnectDB()







// import express from "express";
// import {DB_NAME} from "./constants.js";
// import dotenv from "dotenv";

// const app = express()
// (
//     async()=>{
//        try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error ",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listing on ${process.env.PORT}`);
        
//         })
//        } catch (error) {
//        console.error("Error: ",error);
//        }
//     }
// )()