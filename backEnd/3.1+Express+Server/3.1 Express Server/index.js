import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express World!");
});

app.listen(3000, () => {
  console.log(`Server running on port ${port}.`);
});