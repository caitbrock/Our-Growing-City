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

function create(req, res) {
  const Development = newDevelopment(req.body);
  Development.user = req.user._id;
  Development.save(function (err) {
    if (err) {
      console.log(err);
      return render(
        "<h5> Must be an admin member to add a new development applciation </h5>"
      );
    }
    res.redirect("developments") , { user: req.user };
  });
}

function newDevelopment(req, res) {
  res.render("developments/new");
}

module.exports = {
  index,
  show,
  new: newDevelopment,
  create,
  edit,
  update,
};
