import mongoose, { Schema, Document, Types } from 'mongoose';
export interface ICustomerAddress extends Document {
    street: string;
    zipCode: string;
    customer: Types.ObjectId;
}
export declare const CustomerAddressSchema: Schema;
declare const CustomerAddress: mongoose.Model<ICustomerAddress, {}, {}, {}, mongoose.Document<unknown, {}, ICustomerAddress> & ICustomerAddress & Required<{
    _id: unknown;
}>, any>;
export default CustomerAddress;
