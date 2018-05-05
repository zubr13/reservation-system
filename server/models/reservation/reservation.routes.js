import { Router } from "express";
import * as ReservationController from "./reservation.controller";
const router = new Router();

router.route("/reservations").get(ReservationController.getReservations);
router.route("/reservations").post(ReservationController.addReservation);

export default router;
