import { Router } from "express";
import * as UniversitiesController from "./universities.controller";
const router = new Router();

router.route("/universities").get(UniversitiesController.getUniversities);
router.route("/universities").post(UniversitiesController.addUniversity);
router
  .route("/universities/:id/buildings")
  .post(UniversitiesController.addBuilding);
router
  .route("/universities/:universityId/buildings/:buildingId/rooms")
  .post(UniversitiesController.addRoom);

export default router;
