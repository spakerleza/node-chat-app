const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "../public");

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var {generateMessage, generateLocation} = require("./utils/message");

app.use(express.static(publicPath));

io.on("connection", (socket) => {
    console.log("new user connected");

    socket.emit("newMessage", generateMessage("Admin", "Welcome to our chart application"));

    socket.broadcast.emit("newMessage", generateMessage("Admin", "New user joined"));

    socket.on("receiveChat", (newChat, callback) => {
        io.emit("newMessage", generateMessage(newChat.from, newChat.text));
        callback("");
    });


    socket.on("createLocationMessage", (location) => {
        io.emit("newLocation", generateLocation("Admin", location.latitude, location.longitude));
    });


    socket.on("disconnect", () => {
        console.log("user has been disconnected from the server");
    });


});


server.listen(port, () => {
    console.log(`Server started on ${port}`);
});

