import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("data")
})

app.get("/login", (req, res) => {
    console.log(req.query)
    res.json(req.query.name)
})

const port = 40000
app.listen(port,() => {
    console.log("running on " + port)
})