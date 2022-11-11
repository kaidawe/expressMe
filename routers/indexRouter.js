const express = require("express");
const indexRouter = express.Router();
const path = require("path");

const indexTitle = {"title":"index" }

indexRouter.get("/", (req, res) =>{
  res.render("index", indexTitle)
});
indexRouter.get("/about", (req, res) => {
  res.render("about", indexTitle);
});
module.exports = indexRouter;