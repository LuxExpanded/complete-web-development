import express from "express";
import fs from "fs";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(`<h1>Homepage <a href='/about'>About Me</a>  <a href='/contact'>Contact Me</a></h1>`);
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is London and I like to read </p><a href='/'>Home</a>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1><span>email: suttersl86@outlook.com</span><br><br><br><a href='/'>Home</a>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});