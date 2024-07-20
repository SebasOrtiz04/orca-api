import type {Request,Response} from 'express'
import Country from '../../models/customer/Country';
import State from '../../models/customer/State';

export class StateController{

    static createState = async (req:Request,res:Response) =>{
        const {country} = req
        try{
            //Se instancia el estado
            const state = new State(req.body)
            state.country = country.id
            country.states.push(state.id)
            await Promise.allSettled([country.save(),state.save()])
            return res.status(200).json(state)
        }catch(error){
            console.log(error)
            return res.status(500).send(' Error en el servidor')
        }
    }

    static getCountryStates = async (req:Request,res:Response) =>{
        try{
            const states = await State.find({country:req.country.id}).populate('country')
            res.status(200).json(states)
        }catch(error){
            console.log(error)
            return res.status(500).send('Error en el servidor')
        }
    }

    static getStateById = async (req:Request, res:Response) =>{
        try{
            const {stateId} = req.params
            const state = await State.findById(stateId).populate('country')
            if(!state){
                const error = new Error('Estado no encontrado')
                return res.status(404).json({error:error.message})
            }
            if(state.country.id !== req.country.id){
                const error = new Error('Acción no válida')
                return res.status(422).json({error:error.message})
            }
            
            return res.status(200).json(state)
        }catch(error){
            console.log(error)
            return res.status(500).send('Error en el servidor')
        }
    }

    static updateState = async (req:Request, res:Response) =>{
        try{
            const {stateId} = req.params
            const state = await State.findById(stateId)
            if(!state){
                const error = new Error('Estado no encontrado')
                return res.status(404).json({error:error.message})
            }
            if(state.country.toString() !== req.country.id){
                const error = new Error('Acción no válida')
                return res.status(422).json({error:error.message})
            }
            state.stateName = req.body.stateName
            await state.save()
            return res.status(200).json(state)
        }catch(error){
            console.log(error)
            return res.status(500).send('Error en el servidor')
        }
    }

    static deleteState = async (req:Request, res:Response) =>{
        try{
            const {country} = req
            const {stateId} = req.params
            
            const state = await State.findById(stateId)
            if(!state){
                const error = new Error('Estado no encontrado')
                return res.status(404).json({error:error.message})
            }
            if(state.country.toString() !== req.country.id){
                const error = new Error('Acción no válida')
                return res.status(422).json({error:error.message})
            } 
            country.states = country.states.filter(state =>state.toString() !== stateId)
            await Promise.allSettled([state.deleteOne(),country.save()]);
            return res.status(204).send('')
        }catch(error){
            console.log(error)
            return res.status(500).send('Error en el servidor')
        }
    }
}