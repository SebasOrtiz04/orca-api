import { Router } from "express"
import { CategoryController } from "../controllers/products/CategoryController"
import { handleInputErrors } from "../middleware/validation"
import { validateCategory, validateCreateCategory } from "../middleware/products/category"
import { SocialEventController } from "../controllers/products/SocialEventController"
import { validateCreateSocialEvent, validatePeople, validatePrices } from "../middleware/customer/socialEvent"

const router = Router()

router.post('/',
    validateCreateCategory,
    handleInputErrors,
    CategoryController.createCategory
)

router.get('/',CategoryController.getAllCategories)

router.param('categoryId',validateCategory)

router.get('/:categoryId',CategoryController.getCategoryById)


//Rutas de Eventos
router.post('/:categoryId/eventos',
    validateCreateSocialEvent,
    handleInputErrors,
    validatePrices,
    validatePeople,
    SocialEventController.createEvent
)

export default router