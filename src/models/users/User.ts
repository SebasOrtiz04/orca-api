import mongoose, {Schema,Document} from "mongoose";

export interface IUser extends Document {
    email: string
    password: string
    firstName: string
    lastName: string
    confirmed: boolean
    admin: boolean
}

const userSchema : Schema = new Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    confirmed:{
        type:Boolean,
        required:true,
        default:false
    },
    admin:{
        type:Boolean,
        required:true,
        default:false
    },
})

const User = mongoose.model<IUser>('User', userSchema)
export default User