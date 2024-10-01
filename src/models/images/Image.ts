import mongoose, { Document, Schema } from "mongoose";

export interface IImage extends Document {
    cloudinaryName:string;
    imageName:string;
    miniatureUrl:string;
    imageUrl:String;
}

const ImageSchema = new Schema({
    cloudinaryName:{
        type:String,
        required:true,
        trim:true
    },
    imageName:{
        type:String,
        required:true,
        trim:true
    },
    miniatureUrl:{
        type:String,
        required:true,
        trim:true
    },
    imageUrl:{
        type:String,
        required:true,
        trim:true
    },
},{timestamps:true})

const Image = mongoose.model<IImage>('Image',ImageSchema)
export default Image