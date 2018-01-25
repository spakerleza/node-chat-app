var socket = io();

socket.on("connect", function(){
    console.log("connected to server");

    // socket.emit("createEmail", {
    //     email: "udeh@example.com",
    //     text: "Hai, This is a test email",
    //     date: 123456
    // });

    socket.emit("receiveChat", {
        form: "sab-Udeh",
        to: "chat room 1",
    });
});

socket.on("disconnect", function() {
    console.log("disconnected from server");
});

socket.on("newChat", function(email) {
    console.log(email);
});