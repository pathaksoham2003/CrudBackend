const { Client } = require("pg");

const dotenv = require("dotenv");
dotenv.config();

const client = new Client(process.env.DB_URL);
/**
 * `CREATE TABLE USERS (
      id serial PRIMARY KEY,
      name varchar(50),
      age integer,
      email varchar(100),
      technical_skills varchar(400),
      location varchar(50),
      bio varchar(150)
    );
    `
 */
(async () => {
  await client.connect();
  try {
    const results = await client.query("SELECT * FROM USERS");
    console.log(results.rows)
    console.log("Database Connection");
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    // console.log("CLOSING DATABASE CONNECTION");
    // client.end();
  }
})();
module.exports = client;

// data base connection onach thevaycha db connection ti end wali line kadhun tak combarr pilllu ata nehemi onach thevacha ahe ka ? ho techya shivay appllication kasa chalel deployment madhe 