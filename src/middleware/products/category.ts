import type {Request, Response, NextFunction} from 'express'
import Category, { ICategory } from '../../models/products/Category'
import { body } from 'express-validator'

declare global {
    namespace Express{
        interface Request{
            category:ICategory
        }
    }
}

export async function validateCategory(req:Request,res:Response,next:NextFunction){
    const {categoryId} = req.params
    try{
        const category = await Category.findById(categoryId)
        if(!category) return res.status(422).send('Categoría no encontrada')
        req.category = category
        next()
    }catch(error){
        console.log(error)
        return res.status(500).send('Id de la categoría no válido')
    }
}

export const validateCreateCategory= [body('categoryName').notEmpty().withMessage('El nombre de la categoría es obligatoria')]