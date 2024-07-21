import { Router } from "express";
import { SocialEventController } from "../controllers/products/SocialEventController";


const router = Router()

router.get('/',SocialEventController.getAllSocialevents)
router.put('/',SocialEventController.getAllSocialevents)

export default router;