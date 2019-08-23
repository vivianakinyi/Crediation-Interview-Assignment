var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//user.js - contains user data
let users = require('./users');

//Fetch all the users
router.get('/users', (req, res, next) => {
	res.json(users);
});

//Fetch specific user using their ID
router.get('/users/:id', (req, res) => {
	// Get the user id param
	const userId = req.params.id

	//Check if the user with id given exists in the users file
	const user = users.find(_user => _user.id === userId);

	//If the user exists render the json response else error message
	if (user) {
		res.json(user)
	}
	else {
		res.json({message: `User with ID ${userId} does not exist`})
	}
});

module.exports = router;
