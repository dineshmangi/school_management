const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
const app = express();
const Routes = require("./routes/route.js");

dotenv.config();

const PORT = process.env.PORT || 5001;

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: "10mb" }));
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

app.use("/", Routes);

// Handle port conflicts gracefully
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting server: ${err.message}`);
    process.exit(1); // Exit the process if the port is in use
  } else {
    console.log(`Server started at port no. ${PORT}`);
  }
});