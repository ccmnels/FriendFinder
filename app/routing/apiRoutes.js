// A GET route with the url /api/friends. 
// This will be used to display a JSON of all possible friends.
//https://friend-finder-fsf.herokuapp.com/api/friends
// A POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic.

var friendList = require('../data/friends.js');
var path      = require('path');

var totalDifference = 0;

module.exports = function(app){
  app.get('/api/friends', function(req, res){
    res.json(friends);
  });

  app.post('/api/friends', function(req, res){

    var greatMatch = {
      name: "",
      image: "",
      matchDifference: 1000
    };
    var usrData   = req.body;
    var usrName   = usrData.name;
    var usrImage  = usrData.image;
    var usrScores   = usrData.scores;

    var totalDifference = 0;

    
    for(var i = 0; i < [friends].length-1; i++){
      console.log(friends[i].name);
      totalDifference = 0;

      for(var j = 0; j < 10; j++){
        
        totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));
        if (totalDifference <= greatMatch.friendDifference){

        
          greatMatch.name = friends[i].name;
          greatMatch.photo = friends[i].photo;
          greatMatch.matchDifference = totalDifference;
        }
      }
    }

    friends.push(usrData);
 
    res.json(greatMatch);
  });
};