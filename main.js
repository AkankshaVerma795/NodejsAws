// const mysql = require("mysql");

// // Create a connection to the MySQL database
// const connection = mysql.createConnection({
//   host: "database-2.c3yo6mgwk3mj.ap-south-1.rds.amazonaws.com",
//   user: "rdsmysql",
//   password: "Pa$$w0rd",
//   database: "-",
//   connectTimeout: 10000,
// });

// // Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database:", err);
//     return;
//   }
//   console.log("Connected to MySQL database");
// });

// // Example query to retrieve data
// connection.query("SELECT * FROM your_table", (err, results) => {
//   if (err) {
//     console.error("Error querying database:", err);
//     return;
//   }
//   console.log("Data retrieved:", results);
// });

// // Example query to insert data
// const newData = { name: "John", age: 30 };
// connection.query("INSERT INTO your_table SET ?", newData, (err, result) => {
//   if (err) {
//     console.error("Error inserting data:", err);
//     return;
//   }
//   console.log("New data inserted, ID:", result.insertId);
// });

// // Example query to update data
// const updateData = { age: 31 };
// connection.query(
//   "UPDATE your_table SET ? WHERE name = ?",
//   [updateData, "John"],
//   (err, result) => {
//     if (err) {
//       console.error("Error updating data:", err);
//       return;
//     }
//     console.log("Data updated:", result.affectedRows);
//   }
// );

// // Example query to delete data
// connection.query(
//   "DELETE FROM your_table WHERE name = ?",
//   ["John"],
//   (err, result) => {
//     if (err) {
//       console.error("Error deleting data:", err);
//       return;
//     }
//     console.log("Data deleted:", result.affectedRows);
//   }
// );

// // Close the connection when done
// connection.end((err) => {
//   if (err) {
//     console.error("Error closing database connection:", err);
//     return;
//   }
//   console.log("Connection to MySQL database closed");
// });
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Deploy a Nodejs in Cloud'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80