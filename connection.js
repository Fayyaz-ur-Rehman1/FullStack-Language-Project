const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "language_project"
})
module.exports = connection