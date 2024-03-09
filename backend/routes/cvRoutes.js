import express from 'express';
import { getCv } from '../controllers/cvController.js';

const router = express.Router();

router.route('/').get(getCv);

export default router;
