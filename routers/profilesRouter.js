const express = require("express");
const profilesRouter = express.Router();
const path = require("path");
const fs = require("fs").promises;
const dataPath = path.join(__dirname, "../data/");


  profilesRouter.get("/", (req, res) => {
    fs.readFile(dataPath + "profiles.json")
      .then((contents) => {
        console.log(contents);

        const profilesJson = JSON.parse(contents);
        console.log(profilesJson);

        res.render("profiles", {
          title: "Express Yourself - Profiles",
          profiles: profilesJson,
        });
      })
      .catch((err) => {
        console.log(err);
        res.writeHead(500);
        res.end("Error");
      });
  });


  profilesRouter.get("/:profileId", (req, res) => {
    fs.readFile(dataPath + "profiles.json")
      .then((contents) => {
        console.log(contents);
        // need to parse the raw buffer as json if we want to work with it
        const profilesJson = JSON.parse(contents);
        //   prepare and send an OK respon
        res.render("profile", {
          title: "Express Yourself -" + profilesJson.name,
          profiles: profilesJson,
          layout:"./layouts/side-bar-layout",
          profileId: req.params.profileId
        });
      })
      .catch((err) => {
        console.log(err);
        res.writeHead(500);
        res.end("Error");
      });
  });


module.exports = profilesRouter;
