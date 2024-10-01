import {Router} from 'express';
import { AuthController } from '../controllers/users/AuthController';
import { autenticate, validateConfirmAccount, validateCreateAccount, validateEmail, validateLogin, validatePassword, validateToken, validateUser, validateUserConfirmed, validateUserMisignConfirm } from '../middleware/auth';
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

router.post('/resend-code',
    validateUser,
    validateUserMisignConfirm,
    handleInputErrors,
    AuthController.resendCode
)

router.post('/login',
    validateLogin,
    validateUser,
    validateUserConfirmed,
    validatePassword,
    handleInputErrors,
    AuthController.login
)

router.get('/user',
    autenticate,
    AuthController.getAuthUser
)

export default router;