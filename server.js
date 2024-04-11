const express = require("express");
const app = express();
const mongoose = require("mongoose"); // import mongoose
const routes = require("./MealRoutes");
const cors = require("cors");

// This command reads the .env file, loads the secrets into process.env, and makes them accessible in your application securely and conveniently.
require("dotenv").config(); //

// This line is a bit more specific and adjusts how Mongoose handles queries
mongoose.set("strictQuery", false); // Setting to Not Use Strict Query

const PORT = process.env.port || 8000;

app.use(express.json()); // build in body parser
app.use(cors());

mongoose
    .connect(process.env.MONGODB_LINK)
    .then(() => console.log(`we were connected to mongoDB`))
    .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
    console.log(`I am listening on port ${PORT}`);
});

