const Development = require('../models/development');
const User = require('../models/user');
const passport = require("../config/passport");

function index(req, res, next) {
  console.log(req.query);
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  // Default to sorting by name
  let sortKey = req.query.sort || "name";
  User.find(modelQuery)
    .sort(sortKey)
    .exec(function (err, user) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render("developments/show", {
        user,
        name: req.query.name,
        user: req.user,
        avatar: req.query.avatar
      });
    });
}

function create(req, res) {
  console.log("create reached");
  Development.findById(req.params.id, function (err, development) {
    console.log("the dev.", development);
    console.log(req.body);
    development.review.push(req.body)
    development.save(function (err) {
      if (err) console.log(err)
  res.redirect(`/developments/${development._id}`);
});
});
}

function delReview(req, res) {
  Development.findById(req.params.id, function (err, development) {
    const id = req.params.rid
    if (err) console.log(err)
    const idx = development.review.findIndex((r) => r._id == req.params.rid);
    console.log(development);
    console.log(req.params);
    if (idx === -1) {return false;} else {development.review.splice(idx, 1);
    };
    development.save(function (err) {
      if (err) console.log(err)
  res.redirect(`/developments/${development._id}`);
});
});
}

module.exports = {
  index,
  create,
  delete: delReview,
};