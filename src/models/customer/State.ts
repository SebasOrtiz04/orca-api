import mongoose, { Document, Schema, Types } from "mongoose";


export interface IState extends Document{
    stateName:string
    country:Types.ObjectId
}

export const StateSchema :Schema = new Schema({
    stateName:{
        type:String,
        trim:true,
        unique:true
    },
    country:{
        type:Types.ObjectId,
        ref:'Country'
    }
},{timestamps:true})

const State = mongoose.model<IState>('State',StateSchema)
export default State