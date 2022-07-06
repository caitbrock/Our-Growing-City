const Development = require("../models/development");
const Review = require("../models/review");

function index(req, res) {
  Development.find({}, function (err, developments) {
    res.render("developments/index", { developments });
  });
}

function create(req, res) {
  const development = new Development(req.body);
  development.user = req.user._id;
  development.save(function (err) {
    if (err) {
      console.log(err);
      return render(
        "<h3> Must be an admin member to add a new development applciation </h3>"
      );
    }
    res.redirect("/developments");
  });
}

function newDevelopment(req, res) {
  res.render("developments/new");
}

function show(req, res) {
  Development.findById(req.params.id)
    .populate("user")
    .exec(function (err, development) {
      Review.find({ development: development._id })
        .populate("user")
        .exec(function (err, review) {
          res.render("developments/show", {
            title: "Development Application",
            development,
            review,
          });
        });
    });
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
    function (err, development) {
      if (err) {
        res.render("developments/edit", {
          title: "Update Development Application",
          development,
        });
      }
      res.redirect("/developments");
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
