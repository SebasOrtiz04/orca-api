"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const Customer_1 = __importDefault(require("../../models/customer/Customer"));
class CustomerController {
    static createCustomer = async (req, res) => {
        try {
            const customer = await Customer_1.default.create(req.body);
            res.status(201).json(customer);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Error en  el servidor');
        }
    };
    static getAllCustomers = async (req, res) => {
        try {
            const customers = await Customer_1.default.find();
            res.status(200).json(customers);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('error en el servidor');
        }
    };
    static getCustomerById = async (req, res) => {
        const { id } = req.params;
        try {
            const customer = await Customer_1.default.findById(id);
            if (!customer) {
                const error = new Error('Proyecto no encontrado');
                return res.status(404).json({ error: error.message });
            }
            res.status(200).json(customer);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('error en el servidor');
        }
    };
    static updateCustomer = async (req, res) => {
        const { id } = req.params;
        try {
            const customer = await Customer_1.default.findByIdAndUpdate(id, req.body, { new: true });
            if (!customer) {
                const error = new Error('Proyecto no encontrado');
                return res.status(404).json({ error: error.message });
            }
            res.status(200).json(customer);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('error en el servidor');
        }
    };
    static deleteCustomer = async (req, res) => {
        const { id } = req.params;
        try {
            const customer = await Customer_1.default.findById(id);
            if (!customer) {
                const error = new Error('Proyecto no encontrado');
                return res.status(404).json({ error: error.message });
            }
            await customer.deleteOne();
            res.status(204).send('');
        }
        catch (error) {
            console.log(error);
            res.status(500).send('error en el servidor');
        }
    };
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=CustomerController.js.map