import { Router } from "express";
import * as LectionsController from "./lections.controller";
const router = new Router();

router.route("/lections").get(LectionsController.getLections);

export default router;
