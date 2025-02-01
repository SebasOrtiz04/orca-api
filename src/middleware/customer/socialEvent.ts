import type {Request, Response,NextFunction} from 'express'
import { body } from 'express-validator'

export function validatePrices(req:Request, res:Response, next:NextFunction){
    const {price, pricePerPeople} = req.body
    try{
        if(!price && !pricePerPeople) 
            return res.status(422).send('Debe incluir un precio o un precio por persona')
        
        if(price && pricePerPeople)
            return res.status(422).send('No puede tener precio y precio por persona al mismo tiempo')
        
        next()
    }catch(error){
        console.log(error)
        return res.status(500).send('Error en el servidor')
    }
}

export function validatePeople(req:Request, res:Response, next:NextFunction){
    const {maxPeople, minPeople} = req.body
    try{
        if(maxPeople <= minPeople) 
            return res.status(422).send('el número máximo de personas debe ser mayor al número mínimo de personas')
               
        next()
    }catch(error){
        console.log(error)
        return res.status(500).send('Error en el servidor')
    }
}

export const validateCreateSocialEvent = [
    body('eventName').notEmpty().withMessage('El nombre del evento es obligatorio')
        .isString().withMessage('El nombre del evento debe ser una cadena de texto'),
    body('eventDescription').notEmpty().withMessage('La descripción del evento es obligatorio')
        .isString().withMessage('La descripción del evento debe ser una cadena de texto'),
    body('price').optional().isNumeric().withMessage('El precio debe ser un número'),
    body('pricePerPeople').optional().isNumeric().withMessage('El precio debe ser un número'),
    body('maxPeople').notEmpty().withMessage('El número máximo de personas es obligatorio').
        isNumeric().withMessage('El número máximo de peronas debe ser un número' ),
    body('minPeople').notEmpty().withMessage('El número mínimo de personas es obligatorio').
        isNumeric().withMessage('El número mínimo de peronas debe ser un número' )
]