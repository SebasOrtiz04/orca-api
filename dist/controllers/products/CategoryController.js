"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const Category_1 = __importDefault(require("../../models/products/Category"));
class CategoryController {
    static createCategory = async (req, res) => {
        try {
            const category = await Category_1.default.create(req.body);
            return res.status(201).json(category);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send('Error en el servidor');
        }
    };
    static getAllCategories = async (req, res) => {
        try {
            const categories = await Category_1.default.find();
            return res.status(200).json(categories);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send('Error en el servidor');
        }
    };
    static getCategoryById = async (req, res) => {
        try {
            return res.status(200).json(req.category);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send('Error en el servidor');
        }
    };
}
exports.CategoryController = CategoryController;
//# sourceMappingURL=CategoryController.js.map