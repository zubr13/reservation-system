import { Router } from "express";
import * as ReservationController from "./reservation.controller";
const router = new Router();

router.route("/reservations").get(ReservationController.getReservations);
router
  .route("/reservations/active")
  .get(ReservationController.getActiveReservations);
router.route("/reservations").post(ReservationController.addReservation);
router.route("/reservations/:id").put(ReservationController.updateReservation);

export default router;
