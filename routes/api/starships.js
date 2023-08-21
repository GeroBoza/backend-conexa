const express = require("express");
const router = express.Router();
const starshipsController = require("../../controllers/starshipsController");

router.get("/all", starshipsController.getAll);
router.get("/search", starshipsController.getByName);
router.get("/:id", starshipsController.getOne);

module.exports = router;
