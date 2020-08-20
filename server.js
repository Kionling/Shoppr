const express = require("express");
const clientSideRoutes = require("./routes/client-side-routes");
const apiRoutes = require("./routes/api-routes");

// For saving session data as cookies
var session = require("express-session");
// Requiring passport as we've configured it
// This is authentication middlewear
var passport = require("./config/passport");
var db = require("./models");

const PORT = process.env.PORT || 3001;

// This is our Express App creation
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

// Configure Passport-- for authentication (only required on certain components)
// Initializing our passport middlewear
app.use(passport.initialize());
// using passport to create a session
app.use(passport.session());

// Here are our Routes
app.use(clientSideRoutes);
app.use(apiRoutes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// Start our Node APP 
app.listen(PORT, () => {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});




