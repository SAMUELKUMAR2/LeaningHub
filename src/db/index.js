import mongoose from "mongoose";
// import 'dotenv/config';
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config({
    path: './env'
}
)
   const ConnectDB = async()=>{
        try {
           const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log(`DB connected Successfully !!!`);
            console.log(connectionInstance.connection.host);
        } catch (error) {
            console.error("connection Failled !!!!! ",error);
            process.exit(1)
        }
    }
    export default ConnectDB;
