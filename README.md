To Run the project on local:

1. Run mongodb local server
2. npm i
3. create an .env file in root repository with following value.

`NODE_ENV = "development" PORT = 3000 MONGODB_URL=mongodb://127.0.0.1:27017/eventDB`

4. Run command npm run start:dev

Coding challenge reply to be submitted on or before 25th Oct 2020.

Coding Challenge as attached here and rule is as follows : -

# SMS fullstack challenge

### Your mission, should you choose to accept it

1. Setup a database of your choice and seed it from the `data.json`.

2. Write a backend that provides a RESTful interface to interact with this data

(CRUD).

3. Create a frontend that displays a table with the columns

**city**, **start date**, **end date**, **price**, **status**, **color**.

All columns should be sortable. The data is requested from the backend.

4. Above the grid, please add two date pickers to filter the object by date

range.

Though this is a small app, please pay attention to your application structure.

Host your code on github or bitbucket and include a README with instructions on

how to install and run your application. Bonus-points for providing a

docker-compose file to run your project :)
