import {  Schema,  model, } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    avatar?: string;
}


const UserSchema = new Schema<IUser>({
    name: {
        type: String,
    },
    email:{
        type:String,
    },
    avatar:{
        type:String,
    }
});

export default model('User',UserSchema);