const mongoose = require("mongoose");

const technicalWritingSchema = mongoose.Schema(
  {
    writerName: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    Blog: {
      type: String,
      required: true,
    }  
  },
  { timestamps: true }
);

module.exports = mongoose.model("TechnicalWriting", technicalWritingSchema);
