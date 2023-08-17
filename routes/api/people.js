const express = require("express");
const router = express.Router();
const peopleController = require("../../controllers/peopleController");

router.get("/all", peopleController.getAll);
router.get("/:id", peopleController.getOne);

module.exports = router;
