const Listing = require('../models/listing.js');

async function index(req, res) {
    const allListings = await Listing.find({});
    res.render('listings/index.ejs', { allListings });
}

function newListing(req, res) {
    res.render('listings/new.ejs');
}

async function show(req, res) {
    const listing = await Listing.findById(req.params.id);
    res.render('listings/show.ejs', { listing });
}

async function create(req, res) {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect(`/listings/${newListing._id}`);
}

async function edit(req, res) {
    const listing = await Listing.findById(req.params.id);
    res.render('listings/edit.ejs', { listing });
}

async function update(req, res) {
    const listing = await Listing.findByIdAndUpdate(
        req.params.id,
        req.body.listing,
        { returnDocument: 'after' }
    );
    res.redirect(`/listings/${listing._id}`);
}

async function destroy(req, res) {
    await Listing.findByIdAndDelete(req.params.id);
    res.redirect('/listings');
}

module.exports = {
    index,
    newListing,
    show,
    create,
    edit,
    update,
    destroy,
};
