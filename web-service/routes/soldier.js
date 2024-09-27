const soldierController = require("../controllers/soldier.js");

const express = require("express");
const router = express.Router();

router.post("/", soldierController.createSoldier);
router.get("/:armyID", soldierController.getSoldier);

module.exports = router;