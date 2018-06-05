import { Router } from "express";
import * as AuthController from "./auth.controller";
import { verifyToken } from "./verify.middleware";
const router = new Router();

router.route("/login").post(AuthController.login);
router.route("/logout").get(AuthController.logout);
router.route("/register").post(AuthController.register);
router.get("/me", verifyToken, AuthController.getCurrentUser);

export default router;
