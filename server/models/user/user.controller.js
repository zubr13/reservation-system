import User from './user.model';

const requiredFields = [ 'email', 'name', 'surname', 'mobileNumber', 'ocuppation',
 'password', 'passwordConf']
export function getUsers(req, res) {
    User.find().sort('-dateAdded').exec((err, users) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ users });
    });
}

export function addUser(req, res) {
  if (!requiredFields.every(field => req.body[field])) {
    res.status(400).end();
  }
  const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      surname: req.body.surname,
      mobileNumber: req.body.mobileNumber,
      occuppation: req.body.occuppation,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
  });

  newUser.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}
  