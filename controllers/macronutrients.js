const Macronutrients = require("../models/Macronutrients")

module.exports = {
    index: (req, res) => Macronutrients.find({}).then(macronutrients => res.json(macronutrients)),

    create: (req, res) => Macronutrients.create(req.body).then(macronutrients => res.json(macronutrients)),

    showByMessage: (req, res) => Macronutrients.findOne({ message: req.params.message})
    .then(macronutrients => res.json(macronutrients)),

    showByID: (req, res) => Macronutrients.findById({ _id: req.params.id})
    .then(macronutrients => res.json(macronutrients)),

    update: (req, res) => Macronutrients.findOneAndUpdate({_id: req.params.id },req.body)
    .then(macronutrients => res.json(macronutrients)),

    destroy: (req, res) => Macronutrients.findByIdAndRemove(req.params.id).then(macronutrients => {
        res.send(macronutrients);
    })


};