const db = require("../models");

console.log("DB:", Object.keys(db ));

// Defining methods for the booksController
module.exports = {

    create: function(req,res) {
        console.log("In side the controller create: ", req.body);
       // res.end("In the create route in the controller.");
        db.User.create({
                  email: req.body.email,
                  username: req.body.email,
                  password: req.body.password,
                })
                  .then(function (newUser) {
                    console.log("In the then method of the controller create: ",newUser);

                   // res.redirect("/login");
                    // Why does this redirect not work??
                     res.json(newUser);

                  })
                  .catch(function (err) {
                    res.status(401).json(err);
                  });
    },

    getHello: function(req,res) {
        console.log("In the GetHello Route of the controller");
        res.end("Got to the GetHello route.");
    }

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
