import type {Request, Response} from 'express'
import Category from '../../models/products/Category'

export class CategoryController{

    static createCategory = async (req:Request,res:Response) =>{
        try{
            const category = await Category.create(req.body)
            return res.status(201).json(category)
        }catch(error){
            console.log(error)
            return res.status(500).send('Error en el servidor')
        }
    }
}