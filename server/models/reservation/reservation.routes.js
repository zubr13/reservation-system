import { Router } from 'express';
import * as ReservationController from './reservation.controller';
const router = new Router();

router.route('/reservations').get(ReservationController.getReservations);

export default router;
