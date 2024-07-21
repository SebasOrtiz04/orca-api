"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CustomerController_1 = require("../controllers/customers/CustomerController");
const validation_1 = require("../middleware/validation");
const customer_1 = require("../middleware/customer/customer");
const router = (0, express_1.Router)();
router.post('/', customer_1.validateCreateCustomer, validation_1.handleInputErrors, CustomerController_1.CustomerController.createCustomer);
router.get('/', CustomerController_1.CustomerController.getAllCustomers);
router.get('/:id', customer_1.validateGetCustomerById, validation_1.handleInputErrors, CustomerController_1.CustomerController.getCustomerById);
router.put('/:id', customer_1.validatePutCustomer, validation_1.handleInputErrors, CustomerController_1.CustomerController.updateCustomer);
router.delete('/:id', customer_1.validateGetCustomerById, validation_1.handleInputErrors, CustomerController_1.CustomerController.deleteCustomer);
exports.default = router;
//# sourceMappingURL=customerRoutes.js.map