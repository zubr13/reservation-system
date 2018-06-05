import { Router } from "express";
import * as AuthController from "./auth.controller";
const router = new Router();

router.route("/login").post(AuthController.login);
router.route("/logout").get(AuthController.logout);
router.route("/register").post(AuthController.register);
router.route("/me").get(AuthController.verifyUser);

export default router;
