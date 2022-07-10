const User = require("../models/user");
const Development = require("../models/development");
const passport = require("../config/passport");

async function index(req, res) {
  const user = await User.find();
    res.render("/", { user: req.user, user });
  };


function show(req, res) {
  User.findById(req.params.id).populate("reviews").exec(function(err, foundUser) {
    if(err) {
      req.flash("error", "Something went wrong.");
      return res.redirect("/");
    }
    console.log(foundUser);
    Post.find().where('user.id').equals(foundUser._id).exec(function(err, posts) {
      if(err) {
        req.flash("error", "Something went wrong.");
        return res.redirect("/");
      }
      res.render("users/show", {user: foundUser, posts: posts});
    })
  });
};﻿

module.exports = {
  index,
  show,
};