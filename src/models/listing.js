const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        default: "https://images5.alphacoders.com/549/549615.jpg",
        set: (value) =>
            value === ""
                ? "https://images5.alphacoders.com/549/549615.jpg"
                : value
    },

    price: {
        type: Number,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    country: {
        type: String
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;