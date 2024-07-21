"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProjectExists = validateProjectExists;
const Country_1 = __importDefault(require("../../models/customer/Country"));
async function validateProjectExists(req, res, next) {
    const { countryId } = req.params;
    try {
        const country = await Country_1.default.findById(countryId);
        if (!country) {
            const error = new Error('País no encontrado');
            return res.status(422).json({ error: error.message });
        }
        req.country = country;
        next();
    }
    catch (error) {
        res.status(422).json({ error: 'País no encontrado' });
    }
}
//# sourceMappingURL=country.js.map