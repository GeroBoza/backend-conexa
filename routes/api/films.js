const express = require("express");
const router = express.Router();
const filmsController = require("../../controllers/filmsController");

router.get("/all", filmsController.getAll);
router.get("/:id", filmsController.getOne);

module.exports = router;
