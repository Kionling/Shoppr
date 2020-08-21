const db = require("../models");
const passport = require("passport");
const fs = require("fs");

console.log("DB:", Object.keys(db));


async function extractObjectFromImageURL( url ) {
  // [START vision_localize_objects_gcs]
  // Imports the Google Cloud client libraries

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const gcsUri = `https://cloud.google.com/vision/docs/images/bicycle_example.png`;
   let gcsUri = url;

  const [result] = await client.objectLocalization(gcsUri);

  client.objectLocalization(gcsUri).then(  (result) => {

    const objects = result.localizedObjectAnnotations;

    console.log("In the extractObjectsfromUrl: ", objects);
  
    objects.forEach(object => {
      console.log(`Name: ${object.name}`);
      console.log(`Confidence: ${object.score}`);
      const veritices = object.boundingPoly.normalizedVertices;
      veritices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
    });
    // [END vision_localize_objects_gcs]
  
    const objectNames = objects.map( object =>  object.name );
    return objectNames;

  }

  ).catch(err => console.log(err))


}



// Defining methods for the booksController
module.exports = {

  create: function (req, res) {
    console.log("In side the controller create: ", req.body);
    // res.end("In the create route in the controller.");
    db.User.create({
      email: req.body.email,
      username: req.body.email,
      password: req.body.password,
    })
      .then(function (newUser) {
        console.log("In the then method of the controller create: ", newUser);

        // res.redirect("/login");
        // Why does this redirect not work??
        res.json(newUser);

      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  },

  getHello: function (req, res) {
    console.log("In the GetHello Route of the controller");
    res.end("Got to the GetHello route.");
  },

  login: function (req, res) {

    console.log("In the controller, login route: ", req.body);

    // passport.authenticate("local"), function (req, res) {
    //     console.log("After the passport authentication: ", req.body);
    //     res.json(req);
    // };

    // router.post("/login", passport.authenticate("local"), function(req, res) {
    //     res.json(req.user);
    //   });

    res.json(req.user);
    // db.User.findOne({ email: req.body.email })
  },

   extractFromUrl: function(req,res) {
     console.log("In the Extract from Url in the controller: ", req.body);

     let objectsFromGoogle = extractObjectFromImageURL(req.body);

    // Send the req.body (which is a url ) to the Google API
    // and in the .then statement, we'll send status code 200
    // and send the url back to the client side, along with the results object





   }

  // extractObjectFromImage: async (req, res) => {
  //   try {
  //     console.log("In the Extract Object From Image method of the Controller.");
  //     console.log(Object.keys(req));
  //     console.log(req.body);
  
  //     if (req.file == undefined) {
  //     //if (req.file == undefined) {
  //       return res.send(`You must select a file.`);
  //     }

  //     //test
  //     fs.writeFileSync(
  //       "../"+__dirname + "/Assets/" + "abc",
  //             req.body
  //           );
  
  //   //   Image.create({
  //   //     type: req.file.mimetype,
  //   //     name: req.file.originalname,
  //   //     data: fs.readFileSync(
  //   //       __basedir + "/resources/static/assets/uploads/" + req.file.filename
  //   //     ),
  //   //   }).then((image) => {
  //   //     fs.writeFileSync(
  //   //       __basedir + "/resources/static/assets/tmp/" + image.name,
  //   //       image.data
  //   //     );
  
  //   //     return res.send(`File has been uploaded.`);
  //   //   });
  //   } catch (error) {
  //     console.log(error);
  //     return res.send(`Error when trying upload images: ${error}`);
  //   }

  // }
  //   findAll: function(req, res) {
  //     db.Book
  //       .find(req.query)
  //       .sort({ date: -1 })
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },

  // Right now we don't yet need a find by ID request

  //   findById: function(req, res) {
  //     db.Book
  //       .findById(req.params.id)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   create: function(req, res) {
  //     db.Book
  //       .create(req.body)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },

  // right now we don't need an update request

  //   update: function(req, res) {
  //     db.Book
  //       .findOneAndUpdate({ _id: req.params.id }, req.body)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   remove: function(req, res) {
  //     db.Book
  //       .findById({ _id: req.params.id })
  //       .then(dbModel => dbModel.remove())
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};
