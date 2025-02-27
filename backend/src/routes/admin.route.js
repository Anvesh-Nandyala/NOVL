import {Router} from 'express';
import { createSong } from '../controller/adimin.controller.js';
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';

const router=Router();

 router.post("/songs",protectRoute,requireAdmin,createSong);
 
export default router;