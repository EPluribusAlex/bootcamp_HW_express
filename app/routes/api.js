var express = require('express');
var router = express.Router();
var friends = require("../data/friends");

router.get('/friends', function(req, res) {
  res.json(friends);
});

router.post('/friends', function(req, res) {

	const userScores = req.scores;
  
	const match = function() {
		const friendVariances = [];
		friends.forEach(friend => {
			let differenceTotal = 0;
			for(let i; i < friend.scores.length; i++) {
				const difference = Math.abs(userScores[i] - friend.scores[i]);
				differenceTotal = differenceTotal + difference;
			}
			friendVariances.push(differenceTotal);
		});
		const matchVariance = Math.min(...friendVariances);
		const matchIndex = friendVariances.indexOf(matchVariance);
		return friends[matchIndex];
	}

	res.json(match);

});

module.exports = router;
