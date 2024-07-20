import {Router} from 'express'
import {body,param} from 'express-validator'
import { CustomerController } from '../controllers/customers/CustomerController'
import { handleInputErrors } from '../middleware/validation'

const router = Router()

router.post('/',
    body('firstName').notEmpty().withMessage('El nombre es bligatorio'),
    body('paternalSurname').notEmpty().withMessage('El apellido paterno es bligatorio'),
    body('maternalSurname').notEmpty().withMessage('El apellido materno es obligatorio'),
    body('email')        
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido'),
    body('phone')
        .notEmpty().withMessage('El número telefónico es obligatorio')
        .matches(/^\d{10}$/).withMessage('El número telefónico debe tener 10 dígitos'),
    handleInputErrors,
    CustomerController.createCustomer
)
router.get('/',CustomerController.getAllCustomers)

router.get('/:id',
    param('id').isMongoId().withMessage('Id no válido'),
    handleInputErrors,
    CustomerController.getCustomerById
)

router.put('/:id',
    param('id').isMongoId().withMessage('Id no válido'),
    body('firstName').notEmpty().withMessage('El nombre es bligatorio'),
    body('paternalSurname').notEmpty().withMessage('El apellido paterno es bligatorio'),
    body('maternalSurname').notEmpty().withMessage('El apellido materno es obligatorio'),
    body('email')        
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido'),
    body('phone')
        .notEmpty().withMessage('El número telefónico es obligatorio')
        .matches(/^\d{10}$/).withMessage('El número telefónico debe tener 10 dígitos'),
    handleInputErrors,
    CustomerController.updateCustomer
)


router.delete('/:id',
    param('id').isMongoId().withMessage('Id no válido'),
    handleInputErrors,
    CustomerController.deleteCustomer
)

export default router