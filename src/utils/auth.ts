import bcrypt from 'bcrypt'

export const hashPassword = async (password : string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

export const generateToken = () => Math.floor(100000 +  Math.random() * 900000 ).toString();

export const checkPassword = async (requestPassoprd:string,userPassword: string) =>{
    return await bcrypt.compare(requestPassoprd,userPassword);
}