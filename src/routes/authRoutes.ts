import {Router} from 'express';
import { AuthController } from '../controllers/users/AuthController';
import { validateConfirmAccount, validateCreateAccount, validateEmail, validateLogin, validatePassword, validateToken, validateUser, validateUserConfirmed } from '../middleware/auth';
import { handleInputErrors } from '../middleware/validation';

const router = Router();

router.post ('/create-account',
    validateCreateAccount,
    validateEmail,
    handleInputErrors,
    AuthController.createAccount
);

router.post('/confirm-account',
    validateConfirmAccount,
    validateToken,
    handleInputErrors,
    AuthController.confirmAccount
)

router.post('/login',
    validateLogin,
    validateUser,
    validateUserConfirmed,
    validatePassword,
    handleInputErrors,
    AuthController.login
)

export default router;