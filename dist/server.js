"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const customerRoutes_1 = __importDefault(require("./routes/customerRoutes"));
const counrtyRoutes_1 = __importDefault(require("./routes/counrtyRoutes"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const socialEventRoutes_1 = __importDefault(require("./routes/socialEventRoutes"));
dotenv_1.default.config();
(0, db_1.connectDB)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000', // Permite solicitudes solo desde este origen
}));
app.use(express_1.default.json());
//Routes
app.use('/api/customers', customerRoutes_1.default);
app.use('/api/countries', counrtyRoutes_1.default);
app.use('/api/categories', categoryRoutes_1.default);
app.use('/api/socialevents', socialEventRoutes_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map