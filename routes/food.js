const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food");

router.get("/", foodController.index);
router.post("/", foodController.create);
router.get("/message: message", foodController.showByMessage);
router.get("/id: id", foodController.showByID);
router.put("/:id", foodController.update);
router.delete("/:id", foodController.destroy);


module.exports = router;