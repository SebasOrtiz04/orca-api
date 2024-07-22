import type {Request, Response} from 'express'
import SocialEvent from '../../models/products/SocialEvent';
import mongoose from 'mongoose';

export class SocialEventController{

    static createEvent = async (req:Request, res: Response) => {
        const {category,body} = req
        
        //Se inicia la sesión y la transacción
        const session = await mongoose.startSession();
        session.startTransaction();
        
        try{
            //Asignación de valores
            const socialEvent = new SocialEvent(body)
            socialEvent.category = category.id
            category.socialEvents.push(socialEvent.id)
            
            //Se guardan cambios 
            await socialEvent.save({session})
            await category.save({session})

            //Se guarda la transacción
            await session.commitTransaction();
            session.endSession();

            return res.status(201).json({socialEvent:socialEvent,category:category})
        }catch(error){
            console.log(error)
            await session.abortTransaction();
            session.endSession();
            return res.status(500).send('Error en el servidor')
        }
    }

    static getAllSocialevents = async (req:Request, res: Response) => {

        try{
            const socialEvents = await SocialEvent.find().populate('category')
            return res.status(200).json(socialEvents)
        }catch(error){
            console.log(error)
            return res.status(500).send('Error en el servidor')
        }
    }

    static getAllSocialEventById = async (req:Request, res: Response) => {

        try{
            const socialEvents = await SocialEvent.find().populate('category')
            return res.status(200).json(socialEvents)
        }catch(error){
            console.log(error)
            return res.status(500).send('Error en el servidor')
        }
    }
}