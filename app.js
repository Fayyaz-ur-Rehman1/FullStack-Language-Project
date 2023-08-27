const connection = require("./connection");
const express = require('express')
const path = require('path');
const app = express();
const port = 7000;
let bcrypt = require('bcrypt');
app.use(express.urlencoded({ extended: false }))
app.post("/", async (req, res) => {
    try {
        const { name, companyName, email, password } = req.body;
        const encrypt = await bcrypt.hash(password, 7);
        const insertquery = 'INSERT INTO request_Demo_From(name,companyName,email,password) VALUES(?,?,?,?)'
        await connection.query(insertquery, [name, companyName, email, encrypt])
        res.redirect("/")
    }
    catch (error) {
        console.log(error);
        res.status(500).send("error founded");
    }
})
app.use(express.static(path.join(__dirname, "html")))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})

app.get("/:id/:id2", (req, res) => {
    res.sendFile(path.join(__dirname, `${req.params.id}/${req.params.id2}`))
})

app.get("/:id3", (req, res) => {
    res.sendFile(path.join(__dirname, `${req.params.id3}`))
})

app.listen(port, () => {
    console.log("server working");
})