import mongoose, { Document, Schema } from "mongoose"


export interface ICategory extends Document {
    categoryName:string;
    searchedTimes:string;
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
    }
})

const Category = mongoose.model<ICategory>('Category',CategorySchema)
export default Category