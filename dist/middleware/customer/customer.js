"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePutCustomer = exports.validateGetCustomerById = exports.validateCreateCustomer = void 0;
const express_validator_1 = require("express-validator");
exports.validateCreateCustomer = [
    (0, express_validator_1.body)('firstName').notEmpty().withMessage('El nombre es bligatorio'),
    (0, express_validator_1.body)('paternalSurname').notEmpty().withMessage('El apellido paterno es bligatorio'),
    (0, express_validator_1.body)('maternalSurname').notEmpty().withMessage('El apellido materno es obligatorio'),
    (0, express_validator_1.body)('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido'),
    (0, express_validator_1.body)('phone')
        .notEmpty().withMessage('El número telefónico es obligatorio')
        .matches(/^\d{10}$/).withMessage('El número telefónico debe tener 10 dígitos'),
];
exports.validateGetCustomerById = [
    (0, express_validator_1.param)('id').isMongoId().withMessage('Id no válido')
];
exports.validatePutCustomer = [
    ...exports.validateGetCustomerById,
    (0, express_validator_1.body)('firstName').notEmpty().withMessage('El nombre es bligatorio'),
    (0, express_validator_1.body)('paternalSurname').notEmpty().withMessage('El apellido paterno es bligatorio'),
    (0, express_validator_1.body)('maternalSurname').notEmpty().withMessage('El apellido materno es obligatorio'),
    (0, express_validator_1.body)('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debe ser un email válido'),
    (0, express_validator_1.body)('phone')
        .notEmpty().withMessage('El número telefónico es obligatorio')
        .matches(/^\d{10}$/).withMessage('El número telefónico debe tener 10 dígitos')
];
//# sourceMappingURL=customer.js.map