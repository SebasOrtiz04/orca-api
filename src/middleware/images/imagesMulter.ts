// middlewares/imageUploadMiddleware.ts
import { Request, Response, NextFunction } from 'express';

// Filtrar solo imágenes
export async function fileFilter(req: Request, res : Response,next:NextFunction){
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/jpg'];
    try{
        const {file} = req;
        if(!file){
            const error = new Error('Solo se permiten imágenes (JPEG, PNG, GIF, WEBP).')
            return res.status(422).json({error: error.message})
        }
        if(!allowedTypes.includes(req.file.mimetype)) {
            const error = new Error('Solo se permiten imágenes (JPEG, PNG, GIF, WEBP).')
            return res.status(422).json({error: error.message})
        }
        next()
    } catch(error){
        res.status(422).json({error:error})
    }   
};