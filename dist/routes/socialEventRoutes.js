"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SocialEventController_1 = require("../controllers/products/SocialEventController");
const router = (0, express_1.Router)();
router.get('/', SocialEventController_1.SocialEventController.getAllSocialevents);
exports.default = router;
//# sourceMappingURL=socialEventRoutes.js.map