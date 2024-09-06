const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    projectType: {
      type: String,
      required: true,
    },
    projectLanguage: {
      type: String,
      required: true,
    },
    projectMembers: {
      type: String,
      required: false,
    },
    projectLink: {
      type: String,
      required: false,
    },
    projectDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Projects", projectSchema);
