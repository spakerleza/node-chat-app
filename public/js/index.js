var socket = io();

socket.on("connect", function(){
    // console.log("connected to server");
    
    // socket.emit("receiveChat", {
    //    from: "sab-Udeh",
    //    text : "Watching cnn" 
    // });
});

socket.on("newConnection", function(message){console.log(message);});


socket.on("disconnect", function() {
    console.log("disconnected from server");
});

socket.on("newMessage", function(email) {
    console.log(email);
});