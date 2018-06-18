import University from "./universities.model";
import _ from "lodash";

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
    name: req.body.name,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };

  University.findById(req.params.id, (err, university) => {
    university.buildings.push(building);
    console.log(university);
    university.save((err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.json({ university: result });
    });
  });
}

export function addRoom(req, res) {
  const room = {
    name: req.body.name,
    full_name: req.body.name
  };

  University.findById(req.params.universityId, (err, university) => {
    const building = _.find(
      university.buildings,
      building => building._id.toString() === req.params.buildingId
    );
    building.rooms.push(room);
    university.save((err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.json({ university: result });
    });
  });
}
