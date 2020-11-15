const { Pirate } = require('../models/pirate.model');


module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createPirate = (req, res) => {
    const { name, image, treasure, phrase, position, feature} = req.body;
    Pirate.create({
        name,
        image,
        treasure,
        phrase,
        position,
        feature,
    })
    .then(pirate => res.json(pirate))
    .catch(err => res.json(err));
}

module.exports.getAll = (request, response) => {
    Pirate.find({}).sort("image").exec()
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getOne = (request, response) => {
    Pirate.findOne({ _id: request.params._id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updateObject = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params._id}, request.body, {runValidators: true})
        .then( () => response.json({msg: "Update worked"}))
        .catch(err => response.json(err));
}

module.exports.deleteObject = (request, response) => {
    Pirate.deleteOne({_id: request.params._id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

