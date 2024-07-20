import type {Request, Response} from 'express'
import Customer from '../../models/customer/Customer';
export class CustomerController{

    
    static createCustomer = async (req:Request,res:Response) =>{
        try {
            const customer = await Customer.create(req.body);
            res.status(201).json(customer);
        } catch (error) {
            console.log(error)
            res.status(500).send('Error en  el servidor');
        }
        
    }

    static getAllCustomers = async (req:Request,res:Response) =>{
        try{
            const customers = await Customer.find() 
            res.status(200).json(customers);
        }catch(error){
            console.log(error)
            res.status(500).send('error en el servidor')
        }
    }

    static getCustomerById = async (req:Request,res:Response) =>{
        const {id} = req.params;
        try{
            const customer = await Customer.findById(id)
            if(!customer) {
                const error = new Error('Proyecto no encontrado')
                return res.status(404).json({error: error.message})
            } 
            res.status(200).json(customer);
        }catch(error){
            console.log(error)
            res.status(500).send('error en el servidor')
        }
    }

    static updateCustomer = async (req:Request,res:Response) =>{
        const {id} = req.params;
        try{
            const customer = await Customer.findByIdAndUpdate(id,req.body,{new:true});
            if(!customer) {
                const error = new Error('Proyecto no encontrado')
                return res.status(404).json({error: error.message})
            }
            
            res.status(200).json(customer);
        }catch(error){
            console.log(error)
            res.status(500).send('error en el servidor')
        }
    }

    static deleteCustomer = async (req:Request,res:Response) =>{
        const {id} = req.params;
        try{
            const customer = await Customer.findById(id);
            if(!customer) {
                const error = new Error('Proyecto no encontrado')
                return res.status(404).json({error: error.message})
            }
            await customer.deleteOne();
            res.status(204).send('');
        }catch(error){
            console.log(error)
            res.status(500).send('error en el servidor')
        }
    }

}