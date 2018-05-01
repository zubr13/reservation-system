import University from "./universities.model";

export function getUniversities(req, res) {
  University.find()
    .sort("-title")
    .exec((err, universities) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ universities });
    });
}
