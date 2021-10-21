const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    Price: String,
    description: String,
    location: String,
});

module.exports = mongoose.model('Campground', CampgroundSchema)