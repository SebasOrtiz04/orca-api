import {Router} from 'express';
import { AuthController } from '../controllers/users/AuthController';
import { validateCreateAccount, validateEmail } from '../middleware/auth';
import { handleInputErrors } from '../middleware/validation';

const router = Router();

router.post ('/create-account',
    validateCreateAccount,
    validateEmail,
    handleInputErrors,
    AuthController.createAccount
);

export default router;