"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryController = void 0;
const Country_1 = __importDefault(require("../../models/customer/Country"));
class CountryController {
    static createCountry = async (req, res) => {
        try {
            const country = await Country_1.default.create(req.body);
            return res.status(201).json(country);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send('Error en el servidor');
        }
    };
    static getAllCountries = async (req, res) => {
        try {
            const countries = await Country_1.default.find();
            return res.status(200).json(countries);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send('Error en el servidor');
        }
    };
    static getCountryById = async (req, res) => {
        try {
            const country = await Country_1.default.findById(req.country.id).populate('states');
            return res.status(200).json(country);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send('Error en el servidor');
        }
    };
}
exports.CountryController = CountryController;
//# sourceMappingURL=CountryController.js.map