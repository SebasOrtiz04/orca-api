import type {Request, Response,NextFunction} from 'express'
import Country, { ICountry } from '../../models/customer/Country';


declare global {
    namespace Express{
        interface Request{
            country: ICountry 
        }
    }
}

export async function validateProjectExists(req:Request,res:Response,next:NextFunction){
    const {countryId} = req.params
    try{
        const country = await Country.findById(countryId);
        if(!country) {
            const error = new Error('País no encontrado')
            return res.status(422).json({error: error.message})
        }
        req.country = country
        next()
    } catch(error){
        res.status(422).json({error:'País no encontrado'})
    }   
}