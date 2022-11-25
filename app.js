"use strict";

const { mongoose } = require("mongoose");

// Replace the uri string with your connection string.
const uri =
"mongodb+srv://demo-user3:w48hmLenmZb92gyy@atlascluster.6a2legy.mongodb.net/YukoHaleyProfiles?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// store a reference to the default connection
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));


const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const PORT = process.env.PORT || 3004;

const bodyParser = require("body-parser");
const cors = require("cors");

// load our routers
const indexRouter = require("./routers/indexRouter");
const apiRouter = require("./routers/apiRouter");
const profilesRouter = require("./routers/profilesRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors({ origin: [/127.0.0.1*/, /localhost*/] }));

const logger = require("morgan");
app.use(logger("dev")); 

app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(indexRouter);

app.use("/api", apiRouter);

app.use("/profiles", profilesRouter);

app.all("/*", (req, res) => {
  res.status(404).send("File Not Found");
});

// start listening
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

