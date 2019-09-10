const express = require("express");
const router = express.Router();
const macronutrientsController = require("../controllers/macronutrients");

router.get("/", macronutrientsController.index);
router.post("/", macronutrientsController.create);
router.get("/message: message", macronutrientsController.showByMessage);
router.get("/id: id", macronutrientsController.showByID);
router.put("/:id", macronutrientsController.update);
router.delete("/:id", macronutrientsController.destroy);


module.exports = router;