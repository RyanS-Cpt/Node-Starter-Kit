//import express
// const { response } = require("express"); - added in by ?eslint
const express = require("express");

//store express function in variable
const app = express();

//register routes
app.get('/',(request, response) =>{
    // console.log(response);
    response.send("Messaged received");
});

//listen for requests
app.listen(3000, function() {
    console.log("Server is listening");
});

//handle requests

