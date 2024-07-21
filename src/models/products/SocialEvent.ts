import mongoose, { Document, PopulatedDoc, Schema, Types } from "mongoose";
import { IEventItem } from "./EventItem";


export interface ISocialEvent extends Document {
    eventName:string;
    eventDescription:string;
    price:number;
    pricePerPeople:number;
    searchTimes:number;
    maxPeople:number;
    minPeople:number;
    available:boolean;
    category:Types.ObjectId;
    eventItems:PopulatedDoc<IEventItem &Document>[]
}

const SocialEventSchema = new Schema({
    eventName:{
        type:String,
        required:true,
        trim:true
    },
    eventDescription:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:false
    },
    pricePerPeople:{
        type:Number,
        required:false
    },
    searchTimes:{
        type:Number,
        required:true,
        default:0
    },
    maxPeople:{
        type:Number,
        required:true
    },
    minPeople:{
        type:Number,
        required:true
    },
    category:{
        type:Types.ObjectId,
        required:true,
        ref:'Category'
    },
    available:{
        type:Boolean,
        required:true,
        default:true
    },
    eventItems:[
        {
            type:Types.ObjectId,
            ref:'EventItem'
        }
    ]
},{timestamps:true})

const SocialEvent = mongoose.model<ISocialEvent>('SocialEvent',SocialEventSchema)
export default SocialEvent