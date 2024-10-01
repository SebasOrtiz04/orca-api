import type {Request, Response} from 'express'
import User from '../../models/users/User';
import { generateToken, hashPassword } from '../../utils/auth';
import Token from '../../models/users/Token';
import { AuthEmail } from '../../emails/AuthEmail';
import { generateJWT } from '../../utils/jwt';

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

            const tokenJWT = generateJWT({id:user.id});

            res.status(200).send(tokenJWT);
        } catch (error) { 
            console.log(error)
            res.status(500).send('Error en el servidor');            
        }
    }

    static login = async (req: Request, res: Response) =>{
        try {
            const {user} = req
            const tokenJWT = generateJWT({id:user.id});
            res.status(200).json({token:tokenJWT, user:user});
        } catch (error) { 
            res.status(500).send('Error en el servidor');            
        }
    }

    static resendCode = async (req: Request, res: Response) =>{
        try {
            const {user} = req
            
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

            res.status(200).send('Código enviado correctamente');
        } catch (error) { 
            res.status(500).send('Error en el servidor');            
        }
    }

    static getAuthUser = async (req: Request, res: Response) =>{
        try {
            res.status(200).json(req.user);
        } catch (error) { 

            res.status(500).send('Error en el servidor');            
        }
    }

    static createTokenconfirmation = async (req: Request, res: Response) =>{
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

    
}