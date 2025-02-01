import { body, param } from "express-validator";

export const validateCreateCustomer = [
    body('firstName').notEmpty().withMessage('El nombre es bligatorio'),
    body('paternalSurname').notEmpty().withMessage('El apellido paterno es bligatorio'),
    body('maternalSurname').notEmpty().withMessage('El apellido materno es obligatorio'),
    body('email')        
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido'),
    body('phone')
        .notEmpty().withMessage('El número telefónico es obligatorio')
        .matches(/^\d{10}$/).withMessage('El número telefónico debe tener 10 dígitos'),
]

export const validateGetCustomerById = [
    param('id').isMongoId().withMessage('Id no válido')
]

export const validatePutCustomer = [
    ...validateGetCustomerById,
    body('firstName').notEmpty().withMessage('El nombre es bligatorio'),
    body('paternalSurname').notEmpty().withMessage('El apellido paterno es bligatorio'),
    body('maternalSurname').notEmpty().withMessage('El apellido materno es obligatorio'),
    body('email')        
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido'),
    body('phone')
        .notEmpty().withMessage('El número telefónico es obligatorio')
        .matches(/^\d{10}$/).withMessage('El número telefónico debe tener 10 dígitos')    
]