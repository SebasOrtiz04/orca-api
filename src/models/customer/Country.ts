import mongoose, {Schema,Document,Types, PopulatedDoc} from 'mongoose'
import { IState } from './State'

export interface ICountry extends Document {
    countryName:string
    states:PopulatedDoc<IState & Document>[]
}

export const CountrySchema : Schema = new Schema({
    countryName:{
        type:String,
        trim:true
    },
    states:[
        {
            type:Types.ObjectId,
            ref:'State'
        }
    ]
},{timestamps:true})

const Country = mongoose.model<ICountry>('Country',CountrySchema)
export default Country