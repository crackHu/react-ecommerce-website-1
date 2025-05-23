import { Router } from 'express';
import cartController from '../controllers/cartController';

const router = Router();
// 直接使用已导出的实例，无需 new

router.get('/', cartController.getCart);
router.post('/add', cartController.addItem);
router.post('/remove', cartController.removeItem);
router.post('/clear', cartController.clearCart);

export default router;