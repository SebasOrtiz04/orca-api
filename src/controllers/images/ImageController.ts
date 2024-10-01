import type {Request, Response} from 'express'
import cloudinary from '../../config/cloudinary';
import Image from '../../models/images/Image';
import fs from 'fs';

export class ImageController{

    static uploadImage = async (req: Request, res: Response) => {
        const {file, body} = req

        try{

            const publicId = Math.random().toString(36).substring(2, 10);
            const uploadImage = await cloudinary.uploader.upload(file.path, {public_id :publicId} )
            
            // Optimize delivery by resizing and applying auto-format and auto-quality
            const optimizeUrl = cloudinary.url(publicId, {
                fetch_format: 'auto',
                quality: 'auto'
            });
 
            // Transform the image: auto-crop to square aspect_ratio
            const autoCropUrl = cloudinary.url(publicId, {
                crop: 'auto',
                gravity: 'auto',
                width: 250,
                height: 250,
            });

            const image = await Image.create({
                imageName:body.imageName,
                cloudinaryName:publicId,
                miniatureUrl:autoCropUrl,
                imageUrl:optimizeUrl,
            })
            // Elimina el archivo del servidor local
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error('Error al eliminar el archivo:', err);
                } else {
                    console.log('Archivo eliminado exitosamente:', file.path);
                }
            });
            return res.status(201).json({
                message: 'Imagen subida exitosamente',
                file: image, // Aquí puedes manejar el archivo como necesites
            });

        }catch(error){
            console.log(error)
            return res.status(500).send('Error en el servidor')
        }
    }
}