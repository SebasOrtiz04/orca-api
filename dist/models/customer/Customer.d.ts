import mongoose, { Document, PopulatedDoc } from 'mongoose';
import { ICustomerAddress } from './CustomerAdress';
export interface ICustomer extends Document {
    firstName: string;
    paternalSurname: string;
    maternalSurname: string;
    email: string;
    phone: string;
    customerAddresses: PopulatedDoc<ICustomerAddress & Document>[];
}
declare const Customer: mongoose.Model<ICustomer, {}, {}, {}, mongoose.Document<unknown, {}, ICustomer> & ICustomer & Required<{
    _id: unknown;
}>, any>;
export default Customer;
