
module.exports = function (app) {
 
  // Client Side Routes all go to our React APP
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  // This code block sends all requests to the client side
  // if we are in a production enviornment.  I don't think we need this.
  // if (process.env.NODE_ENV === "production") {
  //   app.use(express.static("client/build"));
  // }
};
