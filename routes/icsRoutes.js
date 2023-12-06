const express = require("express")
const { icsGen } = require("../controllers/icsGenerator")
const { icsExtractor } = require("../controllers/icsExtractor")
const router = express.Router()

router.route("/").post(icsGen)
router.route("/:villaId").get(icsExtractor)

module.exports = router