const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const MacronutrientsSchema = new Schema({
        fat: Number,
        protein: Number,
        carbohydrates: Number,
});

module.exports = mongoose.model("Macronutrients", MacronutrientsSchema)