"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryController_1 = require("../controllers/products/CategoryController");
const validation_1 = require("../middleware/validation");
const category_1 = require("../middleware/products/category");
const SocialEventController_1 = require("../controllers/products/SocialEventController");
const socialEvent_1 = require("../middleware/customer/socialEvent");
const router = (0, express_1.Router)();
router.post('/', category_1.validateCreateCategory, validation_1.handleInputErrors, CategoryController_1.CategoryController.createCategory);
router.get('/', CategoryController_1.CategoryController.getAllCategories);
router.param('categoryId', category_1.validateCategory);
router.get('/:categoryId', CategoryController_1.CategoryController.getCategoryById);
//Rutas de Eventos
router.post('/:categoryId/eventos', socialEvent_1.validateCreateSocialEvent, validation_1.handleInputErrors, socialEvent_1.validatePrices, socialEvent_1.validatePeople, SocialEventController_1.SocialEventController.createEvent);
exports.default = router;
//# sourceMappingURL=categoryRoutes.js.map