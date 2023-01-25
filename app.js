const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const mainRoutes = require('./routes/main-routes');
const errorRoutes = require('./routes/error-routes');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/pcn')

// zasoby statyczne
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

// silnik widoków
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// trasy
app.use(mainRoutes);
app.use(errorRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});