import mongoose, { Schema, Document, PopulatedDoc } from 'mongoose';
import { IState } from './State';
export interface ICountry extends Document {
    countryName: string;
    states: PopulatedDoc<IState & Document>[];
}
export declare const CountrySchema: Schema;
declare const Country: mongoose.Model<ICountry, {}, {}, {}, mongoose.Document<unknown, {}, ICountry> & ICountry & Required<{
    _id: unknown;
}>, any>;
export default Country;
