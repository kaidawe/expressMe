"use strict";

const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const PORT = process.env.PORT || 3004;

// load our routers
const indexRouter = require("./routers/indexRouter");
const apiRouter = require("./routers/apiRouter");
const profilesRouter = require("./routers/profilesRouter");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const logger = require("morgan");
app.use(logger("dev")); 

app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");



app.get("/yuko", (req, res) => res.sendFile(__dirname + "/pages/yuko"));
app.get("/haley", (req, res) => res.sendFile(__dirname + "/pages/haley"));
app.get("/sam", (req, res) => res.sendFile(__dirname + "/pages/sam"));


app.use(indexRouter);

app.use("/profiles", profilesRouter);

app.all("/*", (req, res) => {
  res.status(404).send("File Not Found");
});

// start listening
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
