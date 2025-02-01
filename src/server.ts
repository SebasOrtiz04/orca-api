import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';
import customerRoutes from './routes/customerRoutes';
import countryRoutes from './routes/counrtyRoutes';
import categoryRoutes from './routes/categoryRoutes';
import socialeventRoutes from './routes/socialEventRoutes';
import authRoutes from './routes/authRoutes';
import imageRoutes from './routes/imageRoutes';

dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: '*'
}));
  

app.use([express.json()]);


//Routes
app.use('/api/customers',customerRoutes);
app.use('/api/countries',countryRoutes);
app.use('/api/categories',categoryRoutes);
app.use('/api/socialevents',socialeventRoutes);
app.use('/api/auth',authRoutes);


app.use('/api/images',imageRoutes);

export default app;