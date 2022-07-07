const Review = require("../models/review"); 
const Development = require('../models/development');

async function create(req, res, next) {
  req.user.content.push(req.body);
  await req.user.save();
  res.redirect("/developments/show/:id");
}

async function delReview(req, res, next) {
  req.user.content.pop(req.body);
  await req.user.save();
  res.redirect("/developments/show/:id");
}

module.exports = {
  create,
  delete: delReview,
};