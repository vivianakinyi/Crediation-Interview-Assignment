const express = require('express')
const body_parser = require('body-parser');

const app = express()
const port = 3000

//parse JSON
app.use(body_parser.json());

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

// POST: Adding new user(s)
app.post('/users', (req, res) => {
	const user = req.body;
	console.log('Adding new user: ', user);

	//add new user to array
	users.push(user)

	//return an updated list
	res.json(users);
});

//PUT : Update a user
app.put('/users/:id', (req, res) => {
	const userId = req.params.id;
	const user = req.body;
	console.log("Editing user: ", userId, " to be ", user);

	const updatedListUsers = [];

	// loop through the list to find and replace one user
	users.forEach(oldUser => {
		if (oldUser.id === userId) {
			updatedListUsers.push(user);
		} else {
			updatedListUsers.push(oldUser);
		}
	});

	// replace old list with the new one
	users = updatedListUsers;

	res.json(users);
});

//DELETE: Remove a user from the list
app.delete('/users/:id', (req, res) => {
	const userId = req.params.id;

	console.log("Delete user with id: ", userId);

	// filter list copy, by exluing item to delete
	const filtered_list = users.filter(user => user.id !== userId);

	//replace old list with new one
	users = filtered_list;

	res.json(users);

});