//import express
// const { response } = require("express"); - added in by ?eslint
const express = require("express");

//store express function in variable
const app = express();

//register routes
app.get("/", (request, response) => {
	// console.log(response);
	response.send("Messaged received");
});

app.get("/node", (req, res) => {
	res.send({ title: "Well done, you found Node!" });
});

app.get("/codeyourfuture", (req, res) => {
	res.send(
		'<h1 style="color:red; background-color:blue;">Your future is looking Bright!</h1>'
	);
});

app.get("/hello", function (req, res) {
	let searchQuery = req.query.search;
	res.send("Hello World! You searched for " + searchQuery);
});

app.get("/chocolate", (req, res) => {
	let query = req.query.amount;
	res.send(`I can only eat ${query * 2} pieces of chocolate, no less!`);
});

app.get("/multiply", (req, res) => {
	let valOne = req.query.value1;
	let valTwo = req.query.value2;
	res.send(`That would equal ${valOne * valTwo}, thank you!`);
});

//listen for requests - typically placed at the end of the document after routes defined
app.listen(3000, function () {
	console.log("Server is listening");
});

//handle requests
