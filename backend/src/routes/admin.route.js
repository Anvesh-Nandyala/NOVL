import {Router} from 'express';
import { getAdmin } from '../controller/adimin.controller.js';

const router=Router();

 router.get("/",getAdmin);
 
export default router;