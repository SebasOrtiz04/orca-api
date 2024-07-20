import mongoose, {Schema,Document,PopulatedDoc, Types} from 'mongoose'
import { ICustomerAddress } from './CustomerAdress'

export interface ICustomer extends Document {
    firstName: string
    paternalSurname: string
    maternalSurname: string
    email: string
    phone: string
    customerAddresses: PopulatedDoc<ICustomerAddress & Document>[]
}

const CustomerSchema: Schema = new Schema({
    firstName:{
        type: String,
        required:true,
        trim:true  
    },
    paternalSurname:{
        type: String,
        required:true,
        trim:true  
    },
    maternalSurname:{
        type: String,
        required:true,
        trim:true  
    },
    email:{
        type: String,
        required:true,
        trim:true,
        unique:true  
    },
    phone:{
        type: String,
        required:true,
        trim:true,
        unique:true  
    },
    customerAddresses:[
        {
            type: Types.ObjectId,
            ref:'CustomerAddress'
        }
    ]
},{timestamps:true})

const Customer = mongoose.model<ICustomer>('Customer',CustomerSchema)
export default Customer