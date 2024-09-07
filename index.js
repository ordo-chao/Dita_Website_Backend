const express = require("express");
const app = express();
const mongoose = require("mongoose");
const eventRouter = require("./routes/events.route");
const projectRouter = require("./routes/projects.route");
const memberRouter = require("./routes/members.routes");
const ditaLeaderRouter = require("./routes/ditaLeaders.route");
const technicalWritingRouter = require("./routes/technicalWriting.route");


const memberModel = require("./models/members.model");
const ditaLeadersModel = require("./models/ditaleaders.model");
const technicalWritingModel = require("./models/technicalWriting.model");

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/api/v1/events", eventRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/members", memberRouter);
app.use("/api/v1/ditaleaders", ditaLeaderRouter);
app.use("/api/v1/technicalWriting", technicalWritingRouter);




// Connect to the database
mongoose
  .connect(
    "mongodb+srv://princeben9312:A8TOzTHkl9ztxPHm@dita-website-backend.vlcyn.mongodb.net/Dita-Website-Backend?retryWrites=true&w=majority&appName=Dita-Website-Backend"
  )
  .then(() => {
    console.log("Connected to the database successfully!");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(`Failed to connect to the database. 
      Error: ${error.message}`);
  });
