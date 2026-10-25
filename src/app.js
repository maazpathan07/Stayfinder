const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const listingRoutes = require('./routes/listingRoutes.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.engine('ejs', ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.redirect('/listings');
});

app.use('/listings', listingRoutes);

module.exports = app;
