import { v2 as cloudinary } from 'cloudinary';
const baseURL = process.env.NEXT_URL_BASE_API
import dotenv from 'dotenv';

dotenv.config()

// Configuration
cloudinary.config({ 
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

export default cloudinary
