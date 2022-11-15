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


indexRouter.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Express Yourself - Contact Us",
    status: null,
  });
});

indexRouter.post("/contact", (req, res) => {
  res.render("contact", {
    title: "Express Yourself - Contact Us",
    status: "received",
    formData: req.body,
  });
});

module.exports = indexRouter;