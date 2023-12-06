import { Router } from 'express';
import { userCreation } from '../controllers/user';

const router = Router();

router.post('/user', userCreation);

export default router;