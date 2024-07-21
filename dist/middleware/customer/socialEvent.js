"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateSocialEvent = void 0;
exports.validatePrices = validatePrices;
exports.validatePeople = validatePeople;
const express_validator_1 = require("express-validator");
function validatePrices(req, res, next) {
    const { price, pricePerPeople } = req.body;
    try {
        if (!price && !pricePerPeople)
            return res.status(422).send('Debe incluir un precio o un precio por persona');
        if (price && pricePerPeople)
            return res.status(422).send('No puede tener precio y precio por persona al mismo tiempo');
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(500).send('Error en el servidor');
    }
}
function validatePeople(req, res, next) {
    const { maxPeople, minPeople } = req.body;
    try {
        if (maxPeople <= minPeople)
            return res.status(422).send('el número máximo de personas debe ser mayor al número mínimo de personas');
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(500).send('Error en el servidor');
    }
}
exports.validateCreateSocialEvent = [
    (0, express_validator_1.body)('eventName').notEmpty().withMessage('El nombre del evento es obligatorio')
        .isString().withMessage('El nombre del evento debe ser una cadena de texto'),
    (0, express_validator_1.body)('eventDescription').notEmpty().withMessage('La descripción del evento es obligatorio')
        .isString().withMessage('La descripción del evento debe ser una cadena de texto'),
    (0, express_validator_1.body)('price').optional().isNumeric().withMessage('El precio debe ser un número'),
    (0, express_validator_1.body)('pricePerPeople').optional().isNumeric().withMessage('El precio debe ser un número'),
    (0, express_validator_1.body)('maxPeople').notEmpty().withMessage('El número máximo de personas es obligatorio').
        isNumeric().withMessage('El número máximo de peronas debe ser un número'),
    (0, express_validator_1.body)('minPeople').notEmpty().withMessage('El número mínimo de personas es obligatorio').
        isNumeric().withMessage('El número mínimo de peronas debe ser un número')
];
//# sourceMappingURL=socialEvent.js.map