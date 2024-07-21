import { Router } from "express";
import { SocialEventController } from "../controllers/products/SocialEventController";


const router = Router()

router.get('/',SocialEventController.getAllSocialevents)

export default router;