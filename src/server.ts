import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';
import customerRoutes from './routes/customerRoutes';
import countryRoutes from './routes/counrtyRoutes';
import categoryRoutes from './routes/categoryRoutes';
import socialeventRoutes from './routes/socialEventRoutes';

dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: '*'
}));
  

app.use(express.json());

//Routes
app.use('/api/customers',customerRoutes);
app.use('/api/countries',countryRoutes);
app.use('/api/categories',categoryRoutes);
app.use('/api/socialevents',socialeventRoutes);

export default app;