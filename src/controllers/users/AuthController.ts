import type {Request, Response} from 'express'
import User from '../../models/users/User';
import { generateToken, hashPassword } from '../../utils/auth';
import Token from '../../models/users/Token';
import { AuthEmail } from '../../emails/AuthEmail';

export class AuthController {

    static createAccount = async (req: Request, res: Response) =>{
        try {
            const {password} = req.body;
            const user = new User(req.body);
            
            // Hash Password
            user.password = await hashPassword(password);


            //Generar token
            const token = new Token();
            token.token = generateToken();
            token.user = user.id;

            //Enviar email
            AuthEmail.sendConfirmationEmail({
                email: user.email,
                name: user.firstName,
                token: token.token
            })

            await Promise.allSettled([user.save(),token.save()])

            res.status(201).send('Cuenta creada, revisa tu email para confirmarla');
        } catch (error) { 
            console.log(error)
            res.status(500).send('Error en el servidor');            
        }
    }

    static confirmAccount = async (req: Request, res: Response) =>{
        try {
            const token = req.token

            const user = await User.findById(token.user)
            user.confirmed = true

            await Promise.allSettled([user.save(),token.deleteOne()]);

            res.status(201).send('Cuenta confirmada correctamente');
        } catch (error) { 

            res.status(500).send('Error en el servidor');            
        }
    }

    static login = async (req: Request, res: Response) =>{
        try {

            res.status(201).send('Autenticado');
        } catch (error) { 

            res.status(500).send('Error en el servidor');            
        }
    }
    
}