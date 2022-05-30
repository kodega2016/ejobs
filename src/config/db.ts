import 'colors'
import { connect  } from 'mongoose';

const connectDB=async()=>{
   let conn= await connect('mongodb://localhost:27017/ejobs');
   console.log(`Database connected to ${conn.connection.name}`.inverse.green)
}

export default connectDB;