const express = require("express");
const router = express.Router();
const planetsController = require("../../controllers/planetsController");

router.get("/all", planetsController.getAll);
router.get("/:id", planetsController.getOne);

module.exports = router;
