const express = require("express");
const mongojs = require("mongojs");
const { Mongoose } = require("mongoose");
const logger = require("morgan");
const path = require("path");
require('dotenv').config();

const PORT = process.env.PORT || 3000

// SET UP EXPRESS
const app = express();

// SET UP LOGGER
app.use(logger("dev"));
 
// SET UP EXPRESS FOR DATA HANDLING
app.unsubscribe(express.urlencoded({ extended: true }));
app.use(express.json());
// SET UP EXPRESS TO DIRECT TO PUBLIC STATIC FILES
app.use(express.static("public"));

// CONNECT TO MONGO DATABASE WITH MONGOOSE
Mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// SET UP ROUTES
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
    console.log('App running on: http://localhost:' + PORT);
});
