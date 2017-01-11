// Create two HTML files.

//The first file will be the home html, this file will be constructed with bootstrap, I will also need to add a jquery link tag to handle all the requests between javascript and html files.

// The second html file will have a form that asks the user questions and stores this questions inside the server.

// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

//Your html-routes.js file should include two routes:
// * A GET Route to /survey which should display the survey page.
// * A default USE route that leads to home.html which displays the home page.
// Your api-routes.js file should contain two routes:
// * A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// * A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// The users answers will the be stored as an array, and then compared with each one of the answers of the previous users.

// The math is calculated by subtracting the differeces in each answer. This numbers are then added to TotalDifference. The lowest Total difference gives us then the ckosest match.
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================







// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8085;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ===============================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ===============================================================
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

// ===============================================================
// LISTENER
// The below code effectively "starts" our server
// ===============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
