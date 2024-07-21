"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const CountryController_1 = require("../controllers/customers/CountryController");
const validation_1 = require("../middleware/validation");
const StateController_1 = require("../controllers/customers/StateController");
const country_1 = require("../middleware/customer/country");
const router = (0, express_1.Router)();
router.post('/', (0, express_validator_1.body)('countryName').notEmpty().withMessage('El nombre del país es obligatorio'), validation_1.handleInputErrors, CountryController_1.CountryController.createCountry);
router.get('/', CountryController_1.CountryController.getAllCountries);
router.get('/:countryId', country_1.validateProjectExists, CountryController_1.CountryController.getCountryById);
// Rutas de Estados
router.param('countryId', country_1.validateProjectExists);
router.post('/:countryId/states', (0, express_validator_1.body)('stateName').notEmpty().withMessage('El nombre del estado es obligatorio'), validation_1.handleInputErrors, StateController_1.StateController.createState);
router.get('/:countryId/states', StateController_1.StateController.getCountryStates);
router.get('/:countryId/states/:stateId', (0, express_validator_1.param)('stateId').isMongoId().withMessage('Id de estado no válido'), validation_1.handleInputErrors, StateController_1.StateController.getStateById);
router.put('/:countryId/states/:stateId', (0, express_validator_1.param)('stateId').isMongoId().withMessage('Id de estado no válido'), (0, express_validator_1.body)('stateName').notEmpty().withMessage('El nombre del estado es obligatorio'), validation_1.handleInputErrors, StateController_1.StateController.updateState);
router.delete('/:countryId/states/:stateId', (0, express_validator_1.param)('stateId').isMongoId().withMessage('Id de estado no válido'), validation_1.handleInputErrors, StateController_1.StateController.deleteState);
exports.default = router;
//# sourceMappingURL=counrtyRoutes.js.map