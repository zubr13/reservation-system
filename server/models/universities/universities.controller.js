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

export function addBuilding(req, res) {
  const building = {
    title: req.body.title,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };

  University.findByIdAndUpdate(
    req.params.id,
    { $set: { building: { $push: building } } },
    (err, university) => {
      console.log(university);
      if (err) {
        res.status(500).send(err);
      }
      res.json({ university });
    }
  );
}
