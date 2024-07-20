import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import customerRoutes from './routes/customerRoutes';
import countryRoutes from './routes/counrtyRoutes';
import categoryRoutes from './routes/categoryRoutes';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

//Routes
app.use('/api/customers',customerRoutes);
app.use('/api/countries',countryRoutes);
app.use('/api/categories',categoryRoutes);

export default app;