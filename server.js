// const http = require('http');
const express = require('express');
const PORT = 8082;
const app = express();
const path = require('path');
const http = require('http');

const tables = [];
const waitlist = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function handleRequest(request, response) {
	response.end('' + request.url);
}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log('Server listening on: http://localhost:' + PORT);
});

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
