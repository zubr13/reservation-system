import Lection from "./lections.model";

export function getLections(req, res) {
  Lection.find()
    .sort("-dateAdded")
    .exec((err, lections) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ lections });
    });
}
