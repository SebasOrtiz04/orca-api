import type {Request, Response} from 'express'
import Country from '../../models/customer/Country'

export class CountryController{

    static createCountry = async (req:Request,res:Response) =>{
        try {
            const country = await Country.create(req.body)
            return res.status(201).json(country)
        } catch (error) {
            console.log(error)
            return res.status(500).send('Error en el servidor');
        }
    }

    static getAllCountries = async (req:Request,res:Response) =>{
        try{
            const countries = await Country.find();
            return res.status(200).json(countries)
        }catch(error){
            console.log(error)
            return res.status(500).send('Error en el servidor')
        }
    }

    static getCountryById = async (req:Request,res:Response) =>{
        try {
            const country = await Country.findById(req.country.id).populate('states')
            return res.status(200).json(country)
        } catch (error) {
            console.log(error)
            return res.status(500).send('Error en el servidor')
        }
    }
}