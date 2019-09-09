const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    servingSize: Number,
    calories: Number,
    macronutrients: {
        fat: Number,
        protein: Number,
        carbohydrates: Number
    }
});

module.exports = mongoose.model("Food", FoodSchema)