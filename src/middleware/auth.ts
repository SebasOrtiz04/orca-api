import { body }  from "express-validator";
import type {Request, Response,NextFunction} from 'express'
import User from "../models/users/User";

export const validateCreateAccount = [
    body('firstName').notEmpty().withMessage('El nombre es bligatorio'),
    body('lastName').notEmpty().withMessage('El apellido paterno es bligatorio'),
    body('email')        
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido'),
    body('password')
        .isLength({min:8}).withMessage('La contraseña debe tener mínimo 8 caracteres'),
    body('password-confirmation')
        .custom((value, {req})=>{
            if(value !== req.body.password)
                throw new Error('Los Passwords no son iguales');
            
            return true;
        })
]

export async function validateEmail(req:Request,res:Response,next:NextFunction){
    const {email} = req.body
    try{
        const user = await User.findOne({email});
        if(user) {
            const error = new Error('Email ya geistrado')
            return res.status(409).json({error: error.message})
        }
        next()
    } catch(error){
        res.status(409).json({error:'Email ya geistrado'})
    }   
}