"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialEventController = void 0;
const SocialEvent_1 = __importDefault(require("../../models/products/SocialEvent"));
const mongoose_1 = __importDefault(require("mongoose"));
class SocialEventController {
    static createEvent = async (req, res) => {
        const { category, body } = req;
        //Se inicia la sesión y la transacción
        const session = await mongoose_1.default.startSession();
        session.startTransaction();
        try {
            //Asignación de valores
            const socialEvent = new SocialEvent_1.default(body);
            socialEvent.category = category.id;
            category.socialEvents.push(socialEvent.id);
            //Se guardan cambios 
            await socialEvent.save({ session });
            await category.save({ session });
            //Se guarda la transacción
            await session.commitTransaction();
            session.endSession();
            return res.status(201).json({ socialEvent: socialEvent, category: category });
        }
        catch (error) {
            console.log(error);
            await session.abortTransaction();
            session.endSession();
            return res.status(500).send('Error en el servidor');
        }
    };
    static getAllSocialevents = async (req, res) => {
        try {
            const socialEvents = await SocialEvent_1.default.find().populate('category');
            return res.status(200).json(socialEvents);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send('Error en el servidor');
        }
    };
}
exports.SocialEventController = SocialEventController;
//# sourceMappingURL=SocialEventController.js.map