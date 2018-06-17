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

export function addUniversity(req, res) {
  const university = new University({
    title: req.body.title,
    description: req.body.description,
    address: req.body.address,
    telephone: req.body.telephone,
    website: req.body.website,
    email: req.body.email,
    city: req.body.city
  });

  university.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ university: saved });
  });
}
