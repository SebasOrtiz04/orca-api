import mongoose, { Document, PopulatedDoc, Types } from "mongoose";
import { IEventItem } from "./EventItem";
export interface ISocialEvent extends Document {
    eventName: string;
    eventDescription: string;
    price: number;
    pricePerPeople: number;
    searchTimes: number;
    maxPeople: number;
    minPeople: number;
    available: boolean;
    category: Types.ObjectId;
    eventItems: PopulatedDoc<IEventItem & Document>[];
}
declare const SocialEvent: mongoose.Model<ISocialEvent, {}, {}, {}, mongoose.Document<unknown, {}, ISocialEvent> & ISocialEvent & Required<{
    _id: unknown;
}>, any>;
export default SocialEvent;
