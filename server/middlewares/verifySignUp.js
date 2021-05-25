const User = require("../models/user.model");

checkDuplicateUserEmail = (req, res, next) => {
  // Email
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }

      next();

  });
};



const verifySignUp = {
  checkDuplicateUserEmail
};

module.exports = verifySignUp;