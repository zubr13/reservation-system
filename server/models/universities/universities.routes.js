import { Router } from "express";
import * as UniversitiesController from "./universities.controller";
const router = new Router();

router.route("/universities").get(UniversitiesController.getReservations);

export default router;
