// server.js

const express = require('express'); // call express
const app = express();              // define our app using express
cons bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us ge thte data from a POST
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());