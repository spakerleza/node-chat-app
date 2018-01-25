const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "../public");

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", (socket) => {
    console.log("new user connected");

    // socket.emit("newChat", {
    //     from: "chima",
    //     text: "Hay, Whats is going on",
    //     date: 12345

    // });


    socket.on("receiveChat", (newChat) => {
        console.log(newChat);
        io.emit("newMessage", {
            from: newChat.from,
            text: newChat.text,
            createdAt: new Date().getTime()
        });
    });

    socket.on("disconnect", () => {
        console.log("user has been disconnected from the server");
    });


});


server.listen(port, () => {
    console.log(`Server started on ${port}`);
});

