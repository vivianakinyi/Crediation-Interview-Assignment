const express = require('express')
const app = express()
const port = 3000

//user.js - contains user data
let users = require('./users');

app.listen(port, () => console.log(`App listening on port ${port}..`))

//Homepage
app.get('/', (req, res) => res.send('Welcome to Crediation!'))

//Fetch all the users
app.get('/users', (req, res, next) => {
	res.json(users);
});

//Fetch specific user using their ID
app.get('/users/:id', (req, res) => {
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
