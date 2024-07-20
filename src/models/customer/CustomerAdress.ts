import mongoose, {Schema,Document, Types} from 'mongoose'

export interface ICustomerAddress extends Document {
    street: string
    zipCode: string
    customer:Types.ObjectId
    // state: string
    // country: string
}

export const CustomerAddressSchema : Schema = new Schema({
    street: {
        type:String,
        trim:true,
    }, 
    zipCode: {
        type:String,
        trim:true,
        required:true
    },
    customer:{
        type:Types.ObjectId,
        ref:'Customer'
    }
    // state: string
},{timestamps:true})

const CustomerAddress = mongoose.model<ICustomerAddress>('CustomerAddress',CustomerAddressSchema)
export default CustomerAddress