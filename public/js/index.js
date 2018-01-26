var socket = io();

socket.on("connect", function(){
    // console.log("connected to server");
    
    // socket.emit("receiveChat", {
    //    from: "sab-Udeh",
    //    text : "Watching cnn" 
    // });
});

socket.on("newMessage", function(message){
    console.log(message);
});


socket.on("newMessage", function(email) {
    console.log(email);
    var li = $("<li></li>");
    li.text(`${email.from}: ${email.text}`);

    $("#messages").append(li);
});

// socket.emit("receiveChat", {
//     from: "henry",
//     text: "hi"
// }, function(data) {
//     console.log("Got your message:", data);
// });


$("#message-form").on("submit", function(ev) {
    ev.preventDefault();

    socket.emit("receiveChat", {
        from: "henry",
        text: $("#message-box").val()
    }, function(data) {
        console.log("Got your message:", data);
    });
});


socket.on("disconnect", function() {
    console.log("disconnected from server");
});