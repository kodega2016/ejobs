import 'colors'
import { connect  } from 'mongoose';

const connectDB=async()=>{

    console.log(process.env);


   let conn= await connect(process.env.MONGO_URI!);
   console.log(`Database connected to ${conn.connection.name}`.inverse.green)
}

export default connectDB;