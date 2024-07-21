import mongoose, { Document, Schema, Types } from "mongoose";


const eventItemTypes = {
    SERVICES : 'Servicios',
    FURNITURES : 'Mobiliario',
    CONSUMABLES : 'Consumibles'
} as const

export type EventItemTypes = typeof eventItemTypes[keyof typeof eventItemTypes]

export interface IEventItem extends Document {
    itemName:string;
    itemDescription:string;
    itemType:EventItemTypes;
    event:Types.ObjectId;
}

const EventItemSchema = new Schema({
    itemName:{
        type:String,
        required:true,
        trim:true
    },
    itemDescription:{
        type:String,
        required:true,
        trim:true
    },
    itemType:{
        type:String,
        enum:Object.values(eventItemTypes),
        required:true
    },
    event:{
        type:Types.ObjectId,
        required:true,
        ref:'SocialEvent'
    },
},{timestamps:true})

const EventItem = mongoose.model<IEventItem>('EventItem',EventItemSchema)
export default EventItem