const express = require("express")
const app = express()

// Server variables
const PORT = 3000
app.use(express.static('./public'))

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.get("/name/:name", (req, res) => {
    let name = req.params.name
    res.send(name)
})

app.get("/google/:search", (req,res) => {
    let search = req.params.search
    res.status(200).redirect(`http://google.com/search?q=${search}`)

})

app.get("/*", (req,res) => {
    res.status(404).send("ERROR 404")
})

app.listen(PORT , function(){
    console.log(`Listening to ${PORT}`)
})
