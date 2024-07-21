import {Router} from 'express'
import {body,param} from 'express-validator'
import { CountryController } from '../controllers/customers/CountryController'
import { handleInputErrors } from '../middleware/validation'
import { StateController } from '../controllers/customers/StateController'
import { validateProjectExists } from '../middleware/customer/country'

const router = Router()

router.post('/',
    body('countryName').notEmpty().withMessage('El nombre del país es obligatorio'),
    handleInputErrors,
    CountryController.createCountry
)

router.get('/',CountryController.getAllCountries)

router.get('/:countryId',
    validateProjectExists,
    CountryController.getCountryById
)


// Rutas de Estados
router.param('countryId',validateProjectExists)

router.post('/:countryId/states',
    body('stateName').notEmpty().withMessage('El nombre del estado es obligatorio'),
    handleInputErrors,
    StateController.createState
)

router.get('/:countryId/states',StateController.getCountryStates)

router.get('/:countryId/states/:stateId',
    param('stateId').isMongoId().withMessage('Id de estado no válido'),
    handleInputErrors,
    StateController.getStateById
)

router.put('/:countryId/states/:stateId',
    param('stateId').isMongoId().withMessage('Id de estado no válido'),
    body('stateName').notEmpty().withMessage('El nombre del estado es obligatorio'),
    handleInputErrors,
    StateController.updateState
)

router.delete('/:countryId/states/:stateId',
    param('stateId').isMongoId().withMessage('Id de estado no válido'),
    handleInputErrors,
    StateController.deleteState
)

export default router