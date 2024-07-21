"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateCategory = void 0;
exports.validateCategory = validateCategory;
const Category_1 = __importDefault(require("../../models/products/Category"));
const express_validator_1 = require("express-validator");
async function validateCategory(req, res, next) {
    const { categoryId } = req.params;
    try {
        const category = await Category_1.default.findById(categoryId);
        if (!category)
            return res.status(422).send('Categoría no encontrada');
        req.category = category;
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(500).send('Id de la categoría no válido');
    }
}
exports.validateCreateCategory = [(0, express_validator_1.body)('categoryName').notEmpty().withMessage('El nombre de la categoría es obligatoria')];
//# sourceMappingURL=category.js.map