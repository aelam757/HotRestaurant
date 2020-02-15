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

function handleRequest(req, res) {
	// Capture the url the request is made to
	const path = req.url;

	// Depending on the URL, display a different HTML file.
	switch (path) {
		case '/':
			return table(res);

		case '/portfolio':
			return displayPortfolio(res);

		default:
			return display404(path, res);
	}
}

// const reservation = [
// 	{
// 		Name  : '',
// 		phone : '',
// 		email : '',
// 		ID    : ''
// 	},
// 	{
// 		Name  : '',
// 		phone : '',
// 		email : '',
// 		ID    : ''
// 	},
// 	{
// 		Name  : '',
// 		phone : '',
// 		email : '',
// 		ID    : ''
// 	},
// 	{
// 		Name  : '',
// 		phone : '',
// 		email : '',
// 		ID    : ''
// 	},
// 	{
// 		Name  : '',
// 		phone : '',
// 		email : '',
// 		ID    : ''
// 	}
// ];

// const waitinglist = [
// 	{
// 		Name  : '',
// 		phone : '',
// 		email : '',
// 		ID    : ''
// 	}
// ];
