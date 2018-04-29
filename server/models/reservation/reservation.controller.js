import Reservation from './reservation.model';

export function getReservations(req, res) {
    Reservation.find().sort('-dateAdded').exec((err, reservations) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ reservations });
    });
  }
  