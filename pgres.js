

const { Client } = require("pg");

const client = new Client("postgresql://gauri:O3LUdHzEy05phCYPUxYi5A@cluster01-3402.7s5.cockroachlabs.cloud:26257/uers?sslmode=verify-full");
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