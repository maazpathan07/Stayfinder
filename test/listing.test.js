const assert = require('node:assert/strict');
const test = require('node:test');
const Listing = require('../src/models/listing.js');

test('listing requires a title, description, price, and location', async () => {
    await assert.rejects(new Listing({}).validate(), (error) => {
        for (const field of ['title', 'description', 'price', 'location']) {
            assert.ok(error.errors[field], `${field} should be required`);
        }
        return true;
    });
});

test('listing uses the default image when its image URL is empty', () => {
    const listing = new Listing({ image: '' });

    assert.equal(
        listing.image,
        'https://images5.alphacoders.com/549/549615.jpg'
    );
});

test('listing accepts valid stay details without a database connection', async () => {
    const listing = new Listing({
        title: 'A quiet cabin',
        description: 'A peaceful place to stay.',
        price: 1500,
        location: 'Jaipur',
    });

    await listing.validate();
});
