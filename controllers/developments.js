const Development = require("../models/development");
const Review = require("../models/review");


async function index(req, res) {
  const developmentData = await Development.find();
  res.render("developments", { developmentData, user: req.user });
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
    res.redirect("developments");
  });
}

function newDevelopment(req, res) {
  res.render("developments/new");
}

async function show(req, res) {
  const result = await Development.findById(req.params.id);
  res.render("developments/show", { result, user: req.user });
}

function edit(req, res) {
  Development.findById(req.params.id, function (err, Development) {
    if (err) {
      res.redirect("/developments");
    }
    res.render("/edit", {
      title: "Edit Development Application",
      Development,
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
  new: newDevelopment,
  create,
  show,
  edit,
  update,
};
