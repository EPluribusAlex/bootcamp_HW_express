var express = require('express');
var router = express.Router();
var friends = require("../data/friends");

router.get('/', function(req, res) {
  res.send(friends);
});

router.post('/friends', function(req, res) {

	const userScores = req.body["scores[]"];
  
	function matchGet() {
		const friendVariances = [];
		friends.forEach(friend => {
			let differenceTotal = 0;
			for(let i = 0; i < friend.scores.length; i++) {
				const difference = Math.abs(parseInt(userScores[i]) - friend.scores[i]);
				differenceTotal = differenceTotal + difference;
			}
			friendVariances.push(differenceTotal);
		});
		const matchVariance = Math.min(...friendVariances);
		const matchIndex = friendVariances.indexOf(matchVariance);
		return friends[matchIndex];
	}

	const match = matchGet();

	console.log(match, "match");
	res.json(match);

});

module.exports = router;
