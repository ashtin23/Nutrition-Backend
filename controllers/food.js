const Food = require("../models/Food")

module.exports = {
    index: (req, res) => Food.find({}).then(foods => res.json(foods)),

    create: (req, res) => Food.create(req.body).then(foods => res.json(foods)),

    showByMessage: (req, res) => Food.findOne({ message: req.params.message})
    .then(food => res.json(food)),

    showByID: (req, res) => Food.findById({ _id: req.params.id})
    .then(food => res.json(food)),

    update: (req, res) => Food.findOneAndUpdate({_id: req.params.id },req.body)
    .then(food => res.json(food)),

    destroy: (req, res) => Food.findByIdAndRemove(req.params.id).then(food => {
        res.send(food);
    })


};