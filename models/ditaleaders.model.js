const mongoose = require("mongoose");

const ditaLeadersSchema = mongoose.Schema(
  {
    leaderName: {
      type: String,
      required: true,
    },
    leaderRole: {
      type: String,
      required: true,
    },
    memberImage: {
      type: String,
      required: false,
    },  
  },
  { timestamps: true }
);

module.exports = mongoose.model("DitaLeaders", ditaLeadersSchema);
