var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
	var fri = {
			"name":req.query.name,
			"description":req.query.description,
			"imageURL":"http://lorempixel.com/400/400/pixels"
			};


		
	
	console.log(fri);
	data.friends.push(fri);

	res.render('index',data);	
}