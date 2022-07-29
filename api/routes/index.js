import { Router } from 'express';
import TextController from '../controllers/Text/text.js';

const routes = Router();

routes.get("/iecho", TextController.reverseText)

export default routes
