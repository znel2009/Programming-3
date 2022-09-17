const http = require('http')
const express = require('express');
const app = express()
const server = http.createServer(app);
const io = require('socket.io')(server);
let messages = []

app.use(express.static("./"))

app.get("/", (req,res) => {
    res.redirect("index.html")
})

server.listen(3000, () => {
    console.log("LISTENING")
})

io.on('connection', function (socket) {
    for(let i in messages) {
      io.sockets.emit("display message", messages[i]);
    }   
    socket.on("send message", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    });
});