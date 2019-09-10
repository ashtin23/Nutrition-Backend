const Food = require('../models/Food')
const Macronutrients = require('../models/Macronutrients')
const foodData = require('./food')
const macronutrientsData = require('./macronutrients')

Food.find({}).remove(() =>
Food.collection.insert(foodData)
  .then(foods => {
    console.log(foodData)
  })
  .catch(err => {
    console.log(err)
  })
)

Macronutrients.find({}).remove(() =>
Macronutrients.collection.insert(macronutrientsData)
  .then(macronutrientss => {
    console.log(macronutrientsData)
  })
  .catch(err => {
    console.log(err)
  })
)

