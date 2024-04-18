import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123456",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

//GET
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

//POST
app.post("/add", async (req, res) => {
  const input = req.body["country"];
try {
   const result = await db.query(
  "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
  [input.toLowerCase()]
  );

  const data = result.rows[0];
  const countryCode = data.country_code;
  try {
    await db.query(
      "INSERT INTO visited_countries (country_code) VALUES ($1)",
      [countryCode]
    );
     res.redirect("/");
  } catch (error) {
  console.log(error);
  const countries = await checkVisisted();
  res.render("index.ejs", { 
    countries: countries, 
    total: countries.length,
    error: "Country already entered. Please try again.",
   }); 
  }
} catch (error) {
  console.log(error);
  const countries = await checkVisisted();
  res.render("index.ejs", { 
    countries: countries, 
    total: countries.length,
    error: "Country does not exists. Please try again.",
   });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});