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
  console.log(development);
  res.render("developments/show", { developmentId, development, user: req.user });
}





function edit(req, res) {
  Development.findById(req.params.id, function (err, development) {
    if (err) {
      res.redirect("/developments");
    }
    res.render("developments/edit", {
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

function newDevelopment(req, res) {
  res.render("developments/new", { user: req.user });
}

function create(req, res) {
  Development.findById(req.params.id, function (err, development) {
  development.save(function (err) {
    if (err) return res.render("flights/new");
    res.redirect(`/developments/${flight._id}`);
  });
});
};

module.exports = {
  index,
  show,
  new: newDevelopment,
  create,
  edit,
  update,
};
