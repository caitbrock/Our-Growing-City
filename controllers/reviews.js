const Review = require("../models/review"); 
const Development = require('../models/development');


function create(req, res) {
  Development.findById(req.params.id, function (err, development) {
    development.review.push(req.body);
    console.log(req.body)
    development.save(function (err) {
  res.redirect(`/developments/${development._id}`);
});
});
}

async function delReview(req, res, next) {
  req.user.content.pop(req.body);
  await req.user.save();
  res.redirect(`/developments/${development._id}`);
}

module.exports = {
  create,
  delete: delReview,
};