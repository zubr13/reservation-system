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
  if (req.query.userId) {
    return getUserReservations(req, res);
  }
  Reservation.find()
    .sort("-dateAdded")
    .exec((err, reservations) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ reservations });
    });
}

function getUserReservations(req, res) {
  Reservation.find({ organizerId: req.query.userId })
    .sort("-dateAdded")
    .exec((err, reservations) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ reservations });
    });
}

export function getActiveReservations(req, res) {
  Reservation.find({ status: "active" })
    .sort("-dateAdded")
    .exec((err, reservations) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ reservations });
    });
}

export function getAcceptedReservations(req, res) {
  Reservation.find({ status: "accepted" })
    .sort("-dateAdded")
    .exec((err, reservations) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ reservations });
    });
}

export function getRejectedReservations(req, res) {
  Reservation.find({ status: "rejected" })
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
    organizerId: req.body.organizerId,
    university: req.body.university,
    building: req.body.building,
    room: req.body.room,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    description: req.body.description,
    status: "active"
  });

  reservation.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ reservation: saved });
  });
}

export function updateReservation(req, res) {
  Reservation.findByIdAndUpdate(req.params.id, req.body, (err, reservation) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ reservation });
  });
}
