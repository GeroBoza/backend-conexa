var express = require("express");
var router = express.Router();

const filmsRouter = require("./api/films");
const peopleRouter = require("./api/people");
const starshipsRouter = require("./api/starships");
const planetsRouter = require("./api/planets");

/* GET home page. */
router.use("/films", filmsRouter);
router.use("/people", peopleRouter);
router.use("/starships", starshipsRouter);
router.use("/planets", planetsRouter);

module.exports = router;
