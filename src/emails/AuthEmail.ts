import { transporter } from "../config/nodemailer"

interface IEmail {
    email: string,
    name:string,
    token: string
}

export class AuthEmail {
    static sendConfirmationEmail = async ( user : IEmail ) => {

        try{
            const info = await transporter.sendMail({
                from:'ventas@salonorca.com',
                to: user.email,
                subject: 'Salón Jardín - Confirma tu cuenta',
                text: 'UpTask - Confirma tu cuenta',
                html:`
                    <p>
                        Hola ${user.name}, has creado tu cuenta en el portal de Salón Jardín Orca, ya casi está todo listo, solo debes confirmar tu cuenta
                    </p>
                    <p> Visita el siguiente enlace:</p>
                    <a href="">Confirmar cuenta</a>
                    <p> E ingresa el código: <b>${user.token}</b></p>
                    <p> Este token expira en 10 minutos</p>
                `
            })
    
            console.log('Mensaje enviado', info.messageId)
        }catch(error){
            console.log(error)
        }
    }
}