# Crediation-Interview-Assignment
This was part of Crediation (a startup that offers loans to other startups for a purpose) interview assignment. 

The task was to create a simple ExpressJS with a REST API to fetch data from a JSON file. The API should be able to fetch users from the json file. The API should also allow the user to fetch a specific user from the JSON file.

To run this ExpressJS app git clone the repo and run

$ node app.js

To fetch all users

$ curl http://localhost:3000/users/

To fetch existing user

$ curl http://localhost:3000/users/CR1

** Future Imporvements
1. Create routes for the different endpoints
2. Connect API to a database to store the user details
3. Allow creation of new users
