// =================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// =================================================================

var peopleData = require("../data/friends.js");


// ROUTING
module.exports = function (app) {

  // API GET Requests
  // Below code handles when users "visit" a page.
  app.get("/api/friends", function(req, res) {
    res.json(peopleData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  app.post("/api/friends", function(req, res) {
    // Convert user scores array of strings to numbers
    var scoresStringArray = req.body.scores;
    var scoresNumberArray = [];
    var scoresCompare = [];
    var sum = 0;

    compareScores();
    findMatch();

    // =====================================================
    // FUNCTIONS
    // Function to check scores
    function compareScores() {
      for (var i=0; i<scoresStringArray.length; i++){
        scoresNumberArray.push(parseInt(scoresStringArray[i]));
      }

      var userScores = req.body.scores;

    // Loop through array of friends to compare to users choices
    for (var j=0; j<peopleData.length; j++){

      // Loop through array of scores from each friend and add the difference.
      for (var s=0; s<scoresNumberArray.length; s++){
        sum += Math.abs(peopleData[j].scores[s]-scoresNumberArray[s]);
      }
      // Pushing sums to scoresCompare array.
      scoresCompare.push(sum);
      // Setting sum back to 0 for the next friend.
      sum = 0;
    }
  }

  function findMatch(){
    // setting initial lowest difference to the first number of the scoresCompare array
    var lowestDiff = scoresCompare[0];
    var matchIndex;

    // for loop to find the lowest number, this number thenbecomes lowestDiff
    for (var i=0; i<scoresCompare.length; i++){
      if (scoresCompare[i]<lowestDiff) {
        lowestDiff= scoresCompare[i];
      }
      //find index of the lowest number inside scoresCompare
      matchIndex = (scoresCompare.indexOf(lowestDiff));
    }

    // Use index to find match
    var match = peopleData[matchIndex];
    peopleData.push(req.body);
    res.json(match);
  }
});
};







