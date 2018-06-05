import User from "../user/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const secret = "megasecret";

export function login(req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) return res.status(500).send("Error on the server.");
    if (!user) return res.status(404).send("No user found.");

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
  });
}

export function logout(req, res) {
  res.status(200).send({ auth: false, token: null });
}

export function register(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    surname: "ds",
    mobileNumber: "ds"
  });

  user.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send("There was a problem registering the user`.");
    }
    var token = jwt.sign({ id: user._id }, secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
  });
}

export function getCurrentUser(req, res) {
  User.findById(req.userId, { password: 0 }, function(err, user) {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
}
