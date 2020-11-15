const mongoose = require('mongoose');


const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate Name is required"],
        minlength: [3, "Name must be at least three characters"],
    },
    image: {
        type: String,
        required: [true, "Image URL is rqeuired"],
        minlength: [3, "Must be at least three characters"]
    },
    treasure: {
        type: String,
        required: [true, "# of Treasure Chests is required"],
        minlength: [1, "Must have at least 1 treasure chest"]
    },
    phrase: {
        type: String,
        required: [true, "Catch phrase is required"],
        minlength: [3, "Must be at least three characters"]
    },
    position: {
        type: String,
        required: [true, "Crew position is required"],
        minlength: [3, "Must be at least three characters"]
    },
    feature: {
        type: String,
    },
    }, 
    
    { timestamps: true }
);



module.exports.Pirate = mongoose.model('Pirate', PirateSchema);