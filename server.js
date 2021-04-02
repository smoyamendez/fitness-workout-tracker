const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

// SET UP EXPRESS
const app = express();

// SET UP LOGGER
app.use(logger("dev"));
 
// SET UP EXPRESS FOR DATA HANDLING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// SET UP EXPRESS TO DIRECT TO PUBLIC STATIC FILES
app.use(express.static("public"));

// CONNECT TO MONGO DATABASE WITH MONGOOSE
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// SET UP ROUTES
app.use(require("./routes/api"));
app.use(require("./routes/html"));

app.listen(PORT, () => {
    console.log('App running on: http://localhost:' + PORT);
});
