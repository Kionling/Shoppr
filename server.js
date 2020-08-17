const express = require("express");
const app = express();
const db = require("./models");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  // Add routes, both API and view
  app.use(routes);

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});
