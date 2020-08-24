const router = require("express").Router();
const shopprController = require("../../controllers/controller");
const passport = require("passport");
const upload = require("../../config/upload");
// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })


router.post("/login", passport.authenticate("local"), function(req, res) {

 // console.log("Request body: ", req.body);
 // console.log("Response in the server api login path: ",Object.keys(req));
 // console.log("request user: ", req.user);

 // console.log("In the api route - login info back from passport: ", req.user.dataValues);
  res.json(req.user);

});


router.get("/logout", function(req, res) {
  console.log("LOGGING OUT...");
  req.logout();
  res.end("Logged out");
});

router.route("/signup")

    .get(shopprController.getHello)
    .post(shopprController.create);

router.route("/extractUrl") 
    .post(shopprController.extractFromUrl);

router.route("/searchforfriend")
    .post(shopprController.findFriend);


// router.route("/extract",upload.single("file"))
//     .post(shopprController.extractObjectFromImage)
//router.post("/upload", upload.single("file"), uploadController.uploadFiles);
// router.route("/login")
//     .get(shopprController.findUser);

 // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
//   router.post("/api/login", passport.authenticate("local"), function (req, res) {
//     res.json(req.user);
//   });
//   // Route for signing up a user. The user's password is automatically
//   // hashed and stored securely thanks to
//   // how we configured our Sequelize User Model. If the user is created
//   // successfully, proceed to log the user in,
//   // otherwise send back an error
//   router.post("/api/signup", function (req, res) {

//     console.log("In the signup api route: " + JSON.stringify(req.body) );

//     db.User.create({
//       email: req.body.email,
//       username: req.body.email,
//       password: req.body.password,
//     })
//       .then(function () {
//         res.redirect(307, "/login");
//       })
//       .catch(function (err) {
//         res.status(401).json(err);
//       });
//   });

//   // Route for getting some data about our user to be used client side
//   router.get("/user_data", function (req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id,
//       });
//     }
//   });

//   // Route for logging user out
//   router.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/");
//   });


module.exports = router;

