const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {


    name: { type: "String", required: true },


    interests: Array,
  },

  { collection: "profiles" }
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;