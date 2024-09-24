import { body }  from "express-validator";
import type {Request, Response,NextFunction} from 'express'
import User, { IUser } from "../models/users/User";
import Token, { IToken } from "../models/users/Token";
import { checkPassword, generateToken } from "../utils/auth";
import { AuthEmail } from "../emails/AuthEmail";

declare global {
    namespace Express{
        interface Request{
            token:IToken
            user:IUser
        }
    }
}


export async function autenticate(req:Request,res:Response,next:NextFunction){
    const {headers} = req;
    try {
        console.log(headers.authorization)
        next();
    } catch (error) {
        res.status(500).json({error:'Error en el servidor'})
    }
}

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
        res.status(500).json({error:'Error en el servidor'})
    }   
}

export const validateConfirmAccount = [
    body('token')
        .notEmpty().withMessage('El token es obligatorio'),
]

export async function validateToken(req:Request,res:Response,next:NextFunction){
    const {token} = req.body
    try{
        const tokenExist = await Token.findOne({token});
        if(!tokenExist) {
            const error = Error('Token no válido')
            return res.status(404).json({error: error.message})
        }
        req.token = tokenExist
        next()
    } catch(error){
        res.status(500).json({error:'Error en el servidor'})
    }   
}

export const validateLogin = [
    body('email')        
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido'),
    body('password')
        .notEmpty().withMessage('La contraseña no debe ir vacia'),
]

export async function validateUser(req:Request,res:Response,next:NextFunction){
    const {email} = req.body
    try{
        const user = await User.findOne({email});
        if(!user) {
            const error = Error('Usuario no encontrado')
            return res.status(404).json({error: error.message})
        }
        req.user = user
        next()
    } catch(error){
        res.status(500).json({error:'Error en el servidor'})
    }   
}

export async function validateUserConfirmed(req:Request,res:Response,next:NextFunction){
    const {user} = req
    try{
        if(!user.confirmed) {

            const token = new Token();
            token.user = user.id;
            token.token = generateToken();
            await token.save()

            //Enviar email
            AuthEmail.sendConfirmationEmail({
                email: user.email,
                name: user.firstName,
                token: token.token
            })

            const error = Error('La cuenta no está confirmada, hemos enviado un token a tu correo para que confirmes tu cuenta')
            return res.status(401).json({error: error.message})
        }
        
        next()
    } catch(error){
        res.status(500).json({error:'Error en el servidor'})
    }   
}


export async function validatePassword(req:Request,res:Response,next:NextFunction){
    const {user} = req
    const {password} = req.body
    try{
        const passwordConfirmed = await checkPassword(password,user.password);

        if(!passwordConfirmed) {
            const error = Error('Credenciales inválidas')
            return res.status(401).json({error: error.message})
        }
        next()
    } catch(error){
        res.status(500).json({error:'Error en el servidor'})
    }   
}

