const express = require('express');
const listingController = require('../controllers/listingController.js');

const router = express.Router();

router.route('/')
    .get(listingController.index)
    .post(listingController.create);

router.get('/new', listingController.newListing);
router.get('/:id/edit', listingController.edit);

router.route('/:id')
    .get(listingController.show)
    .put(listingController.update)
    .delete(listingController.destroy);

module.exports = router;
