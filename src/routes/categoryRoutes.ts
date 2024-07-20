import { Router } from "express"
import { CategoryController } from "../controllers/products/CategoryController"
import { body } from "express-validator"
import { handleInputErrors } from "../middleware/validation"

const router = Router()

router.post('/',
    body('categoryName').notEmpty().withMessage('El nombre de la categoría es obligatoria'),
    handleInputErrors,
    CategoryController.createCategory
)

export default router