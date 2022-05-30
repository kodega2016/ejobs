import express,{Express} from 'express'
import * as dotenv from 'dotenv'
import path from 'path'
import connectDB from './config/db';
import errorHandler from './middleware/errorHandler';
const app:Express=express();

//Load env variables
dotenv.config({
    path: path.resolve('.env')
})
//establish database connection
connectDB();

//error handling middleware
app.use(errorHandler);


//server specifications
const NODE_ENV=process.env.NODE_ENV|| "development";
const PORT=process.env.PORT||3000;

const server=app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT} in ${NODE_ENV} mode.`.yellow.inverse)
})

process.on("unhandledRejection", async (err) => {
    console.log(`Server closed due to unhandled rejection ${err}`.red);
    server.close();
    process.exit();
  });