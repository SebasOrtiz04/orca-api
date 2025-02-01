import mongoose from 'mongoose';
import colors from 'colors';
import {exit} from 'node:process';


export const connectDB = async () =>{
    try{
        const {connection} = await mongoose.connect(process.env.DATABASE_URL);
        const url = `${connection.host}:${connection.port}`
        console.log(colors.magenta.bold(`MogoDB Conectado en: ${url}`));
    }catch(error){
        console.log(colors.bgRed.black('Error en la conexión con MongoDB'));
        exit(1);
    }
}