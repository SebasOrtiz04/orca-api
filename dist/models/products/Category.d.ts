import mongoose, { Document, PopulatedDoc } from "mongoose";
import { ISocialEvent } from "./SocialEvent";
export interface ICategory extends Document {
    categoryName: string;
    searchedTimes: string;
    socialEvents: PopulatedDoc<ISocialEvent & Document>[];
}
declare const Category: mongoose.Model<ICategory, {}, {}, {}, mongoose.Document<unknown, {}, ICategory> & ICategory & Required<{
    _id: unknown;
}>, any>;
export default Category;
