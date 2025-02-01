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
                from:'Salón Jardín Orca <ventas@salonorca.com>',
                to: user.email,
                subject: 'Salón Jardín - Confirma tu cuenta',
                html:`

                    <div style='background-color:#151f28;'>
                        <img style='margin:auto;' src='https://orca-chi.vercel.app/_next/image?url=%2Fimg%2FLogos%2Forca2.png&w=96&q=75' alt='Logo Salón'/>
                    </div>
                    <div style='padding:40px; color:#151f28; background-color:#f2ebda ; font-size:18px'>
                        <p  style='font-size:36px;' >Salón Jardín Orca</p>
                        <p> Hola <span style='text-transform: capitalize; font-size:28px'>${user.name}</span> , has creado tu cuenta en el portal de Salón Jardín Orca, ya casi está todo listo, solo debes confirmar tu cuenta.</p>
                        <p style='font-size:24px;' > Copía este código: <b>${user.token}</b></p>
                        <p> Copía y pegalo en el siguiente link:</p>
                        <a  href="${process.env.CLIENT_BASE_URL}/auth/confirm-account" style=' color:#151f28 ; font-size:28px'>
                            Haz click en este enlace para confirmar tu cuenta
                        </a>
                        <p> Este token expira en <b>5 minutos</b></p>
                    </div>
                `
            })
    
            console.log('Mensaje enviado', info.messageId)
        }catch(error){
            console.log(error)
        }
    }
}