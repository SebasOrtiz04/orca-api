import { body } from "express-validator";

export const validateUploadImage = [
    body('imageName').notEmpty().withMessage('El nombre es bligatorio')
]
