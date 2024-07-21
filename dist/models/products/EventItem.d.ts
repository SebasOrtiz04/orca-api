import mongoose, { Document, Types } from "mongoose";
declare const eventItemTypes: {
    readonly SERVICES: "Servicios";
    readonly FURNITURES: "Mobiliario";
    readonly CONSUMABLES: "Consumibles";
};
export type EventItemTypes = typeof eventItemTypes[keyof typeof eventItemTypes];
export interface IEventItem extends Document {
    itemName: string;
    itemDescription: string;
    itemType: EventItemTypes;
    event: Types.ObjectId;
}
declare const EventItem: mongoose.Model<IEventItem, {}, {}, {}, mongoose.Document<unknown, {}, IEventItem> & IEventItem & Required<{
    _id: unknown;
}>, any>;
export default EventItem;
