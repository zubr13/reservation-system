import { Router } from 'express';
import * as UserController from './user.controller';
const router = new Router();

router.route('/users').get(UserController.getUsers);
router.route('/users').post(UserController.addUser);

export default router;
