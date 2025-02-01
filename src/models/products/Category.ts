import mongoose, { Document, PopulatedDoc, Schema, Types } from "mongoose"
import { ISocialEvent } from "./SocialEvent";


export interface ICategory extends Document {
    categoryName:string;
    searchedTimes:string;
    socialEvents:PopulatedDoc<ISocialEvent & Document>[]
}

const CategorySchema = new Schema({
    categoryName:{
        type:String,
        required:true,
        trim:true,
    },
    searchedTimes:{
        type:Number,
        required:true,
        default:0,
    },
    socialEvents:[
        {
            type:Types.ObjectId,
            ref:'SocialEvent'
        }
    ]
},{timestamps:true})

const Category = mongoose.model<ICategory>('Category',CategorySchema)
export default Category