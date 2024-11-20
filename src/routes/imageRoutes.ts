import { Router } from "express";
import { ImageController } from "../controllers/images/ImageController";
import upload from "../config/multerConfig";
import { fileFilter } from "../middleware/images/imagesMulter";
import { validateUploadImage } from "../middleware/images/image";
import { handleInputErrors } from "../middleware/validation";
import { autenticate } from "../middleware/auth";


const router = Router();

router.post('/',
    autenticate,
    upload.single('image'),
    fileFilter,
    validateUploadImage,
    handleInputErrors,
    ImageController.uploadImage
)

router.get('/',
    ImageController.getAllImages
)

router.delete('/:id',
    autenticate,
    ImageController.deleteImage
)

export default router;
