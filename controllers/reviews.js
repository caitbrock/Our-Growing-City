const Review = require("../models/review"); 
const Development = require('../models/development');


function create(req, res) {
  Development.findById(req.params.id, function (err, development) {
    development.review.push(req.body);
    development.save(function (err) {
  res.redirect(`/developments/${development._id}`);
});
});
}

function delReview(req, res) {
  Development.findById(req.params.id, function (err, development) {
    const id = req.params.id
    console.log(req.params.id);
    const idx = development.review.findIndex((r) => r.id === id);
    if (idx === -1) {return false;} else {development.review.splice(idx, 1);}
    development.save(function (err) {
  res.redirect(`/reviews/${review._id}`);
});
});
}

module.exports = {
  create,
  delete: delReview,
};