import { Router } from 'express';
import paymentController from '../controllers/paymentController';

const router = Router();

router.post('/process', paymentController.processPayment);

export default router;