const Development = require("../models/development");
const User = require("../models/user");
const passport = require("../config/passport");

async function index(req, res) {
  const developmentData = await Development.find();
  res.render("developments", { developmentData, user: req.user });
}

async function show(req, res) {
  const development = await Development.findById(req.params.id);
  const developmentId = req.params.id;
  res.render("developments/show", { developmentId, development, user: req.user });
}

function newDevelopment(req, res) {
  res.render("developments/new", { user: req.user });
}

function create(req, res) {
  console.log("create reached");
  Development.findById(req.params.id, function (err, development) {
    development.push(req.body)
    development.save(function (err) {
    if (err) return res.render("developments/new", { user: req.user });
    res.redirect(`/neighbourhoods`);
  });
});
}

function edit(req, res) {
  Development.findById(req.params.id, function (err, development) {
    if (err) {
      res.redirect("/developments");
    }
    res.render("/developments/edit", {
      title: "Edit Development Application",
      development,
    });
  });
}

function update(req, res) {
  Development.findByIdAndUpdate(
    req.params.id,
    req.body,
    function (err, Development) {
      if (err) {
        res.render("developments/edit", {
          title: "Update Development Application",
          Development,
        });
      }
      res.redirect("developments");
    }
  );
}

module.exports = {
  index,
  show,
  new: newDevelopment,
  create,
  edit,
  update,
};
