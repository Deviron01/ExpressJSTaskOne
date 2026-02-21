// import express
const express = require('express');

const app = express();

app.listen(8080, ()=> {
    console.log("Server is running on port 8080");
});

app.get('/', (req, res) => {
    res.send("<h1>Welcome to my Profile API</h1>");
});

app.get('/name', (req, res) => {
    res.send("My name is Viron Otieno");
});

app.get('/age', (req, res) => {
    res.send("I am 25 years old");
});

app.get('/course', (req, res) => {
    res.send("I am currently taking a course in Software Development");
});

app.get('/bio', (req, res) => {
    res.send("I am a software developer with a passion for learning new technologies and building innovative solutions. I have experience in various programming languages and frameworks, and I am always eager to take on new challenges.");
});