import { Router } from "express";
import { ImageController } from "../controllers/images/ImageController";
import upload from "../config/multerConfig";
import { fileFilter } from "../middleware/images/imagesMulter";
import { validateUploadImage } from "../middleware/images/image";
import { handleInputErrors } from "../middleware/validation";


const router = Router();

router.post('/',
    upload.single('image'),
    fileFilter,
    validateUploadImage,
    handleInputErrors,
    ImageController.uploadImage
)

export default router;