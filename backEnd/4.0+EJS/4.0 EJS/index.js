import express from "express";

const app = express();
const port = 3000;

const d = new Date();
const day = d.getDay();
console.log(day);

if (day === 0 || day === 6) {
var  Type = "the weekend"
var  adv = "it's time to have fun"
        }
else {
    Type = "a weekday", 
    adv = "it's time to work hard"
    };

app.get("/", (req, res) => {
    res.render("index.ejs", { 
      dayType: Type,
      advice: adv     
          
  })});

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });