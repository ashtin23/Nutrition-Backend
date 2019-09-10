const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    servingSize: Number,
    calories: Number,
    macronutrients: [
        {
            type: Schema.Types.ObjectId,
            ref: "Macronutrients"
        }
    ]

});

module.exports = mongoose.model("Food", FoodSchema)