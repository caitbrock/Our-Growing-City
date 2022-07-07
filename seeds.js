require("dotenv").config();
require("./config/database");
const Neighbourhood = require("./models/neighbourhood");
const Development = require("./models/development");

const neighbourhoodData = require("./public/assets/Toronto Neighbourhoods.json");
const developmentData = require("./public/assets/ACTIVE - North Toronto - Neighbourhood 173.json");

neighbourhoodData.forEach((e) => delete e._id);
developmentData.forEach((e) => delete e._id);

const p1 = Neighbourhood.deleteMany({});
const p2 = Development.deleteMany({});

Promise.all([p1, p2])
  .then((results) => {
    console.log(results);
    const neighbourhoodPromise = Neighbourhood.create(neighbourhoodData);
    const developmentPromise = Development.create(developmentData);
    return Promise.all([neighbourhoodPromise, developmentPromise]);
  })
  .then((results) => {
    console.log(results);
  })
  .then(() => process.exit());
