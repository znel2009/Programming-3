const express = require("express")

// Define Port
const PORT = 3000

const app = new express()

app.get("/", (req, res) => {
    res.status(200).send("yea")
})

app.listen(PORT, () => {
    console.log("Listening to PORT: ", PORT)
})