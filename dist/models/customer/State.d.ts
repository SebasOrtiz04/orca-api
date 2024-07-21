import mongoose, { Document, Schema, Types } from "mongoose";
export interface IState extends Document {
    stateName: string;
    country: Types.ObjectId;
}
export declare const StateSchema: Schema;
declare const State: mongoose.Model<IState, {}, {}, {}, mongoose.Document<unknown, {}, IState> & IState & Required<{
    _id: unknown;
}>, any>;
export default State;
