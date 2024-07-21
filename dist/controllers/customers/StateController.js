"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateController = void 0;
const State_1 = __importDefault(require("../../models/customer/State"));
class StateController {
    static createState = async (req, res) => {
        const { country } = req;
        try {
            //Se instancia el estado
            const state = new State_1.default(req.body);
            state.country = country.id;
            country.states.push(state.id);
            await Promise.allSettled([country.save(), state.save()]);
            return res.status(201).json(state);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(' Error en el servidor');
        }
    };
    static getCountryStates = async (req, res) => {
        try {
            const states = await State_1.default.find({ country: req.country.id }).populate('country');
            res.status(200).json(states);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send('Error en el servidor');
        }
    };
    static getStateById = async (req, res) => {
        try {
            const { stateId } = req.params;
            const state = await State_1.default.findById(stateId).populate('country');
            if (!state) {
                const error = new Error('Estado no encontrado');
                return res.status(404).json({ error: error.message });
            }
            if (state.country.id !== req.country.id) {
                const error = new Error('Acción no válida');
                return res.status(422).json({ error: error.message });
            }
            return res.status(200).json(state);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send('Error en el servidor');
        }
    };
    static updateState = async (req, res) => {
        try {
            const { stateId } = req.params;
            const state = await State_1.default.findById(stateId);
            if (!state) {
                const error = new Error('Estado no encontrado');
                return res.status(404).json({ error: error.message });
            }
            if (state.country.toString() !== req.country.id) {
                const error = new Error('Acción no válida');
                return res.status(422).json({ error: error.message });
            }
            state.stateName = req.body.stateName;
            await state.save();
            return res.status(200).json(state);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send('Error en el servidor');
        }
    };
    static deleteState = async (req, res) => {
        try {
            const { country } = req;
            const { stateId } = req.params;
            const state = await State_1.default.findById(stateId);
            if (!state) {
                const error = new Error('Estado no encontrado');
                return res.status(404).json({ error: error.message });
            }
            if (state.country.toString() !== req.country.id) {
                const error = new Error('Acción no válida');
                return res.status(422).json({ error: error.message });
            }
            country.states = country.states.filter(state => state.toString() !== stateId);
            await Promise.allSettled([state.deleteOne(), country.save()]);
            return res.status(204).send('');
        }
        catch (error) {
            console.log(error);
            return res.status(500).send('Error en el servidor');
        }
    };
}
exports.StateController = StateController;
//# sourceMappingURL=StateController.js.map