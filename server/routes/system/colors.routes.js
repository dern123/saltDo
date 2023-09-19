const { Router } = require("express");
const router = Router();
const colorController = require("../../controllers/system/color.controller")

router.post('/set/color', colorController.setColor)
router.get('/get/color', colorController.getColor)

module.exports = router;