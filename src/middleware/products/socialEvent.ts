import type {Request, Response, NextFunction} from 'express'
import SocialEvent from '../../models/products/SocialEvent'
import { ISocialEvent } from '../../../dist/models/products/SocialEvent';

declare global {
    namespace Express {
        interface Request {
            socialEvent : ISocialEvent
        }
    }
}
export const validateSocialEvent = async (req:Request, res:Response, next:NextFunction) =>{
    const {socialEventId} = req.params
    try{
        const socialEvent = await SocialEvent.findById(socialEventId)
        if(!socialEvent) return res.status(422).send('Evento no encontrado')
        req.socialEvent = socialEvent
        next()
    }catch(error){
        console.log(error)
        return res.status(422).send('El id del evento no es válido')
    }
}