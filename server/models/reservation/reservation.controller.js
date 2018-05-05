import Reservation from "./reservation.model";
const requiredFields = [
  "organizer",
  "university",
  "building",
  "room",
  "startTime",
  "endTime"
];

export function getReservations(req, res) {
  Reservation.find()
    .sort("-dateAdded")
    .exec((err, reservations) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ reservations });
    });
}

export function addReservation(req, res) {
  if (!requiredFields.every(field => req.body[field])) {
    res.status(400).end();
  }

  const reservation = new Reservation({
    organizer: req.body.organizer,
    university: req.body.university,
    building: req.body.building,
    room: req.body.room,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    description: req.body.description
  });

  reservation.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ reservation: saved });
  });
}

export function createReervation() {}
