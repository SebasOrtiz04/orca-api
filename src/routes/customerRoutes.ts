import {Router} from 'express'
import { CustomerController } from '../controllers/customers/CustomerController'
import { handleInputErrors } from '../middleware/validation'
import { validateCreateCustomer, validateGetCustomerById, validatePutCustomer } from '../middleware/customer/customer'

const router = Router()

router.post('/',
    validateCreateCustomer,
    handleInputErrors,
    CustomerController.createCustomer
)









router.get('/',CustomerController.getAllCustomers)

router.get('/:id',
    validateGetCustomerById,
    handleInputErrors,
    CustomerController.getCustomerById
)

router.put('/:id',
    validatePutCustomer,
    handleInputErrors,
    CustomerController.updateCustomer
)


router.delete('/:id',
    validateGetCustomerById,
    handleInputErrors,
    CustomerController.deleteCustomer
)

export default router