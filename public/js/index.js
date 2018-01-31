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

var locationBtn = $("#send-location");

socket.on("newLocation", function(message) {

    console.log(message);

    var li = $("<li></li>");
    var a = $("<a target='_blank'>My current location</a>");
    
    li.text(`${message.from} : `);
    a.attr("href", `${message.url}`);
    li.append(a);

    $("#messages").append(li);

    locationBtn.removeAttr("disabled").text("Send Location");
});

// socket.emit("receiveChat", {
//     from: "henry",
//     text: "hi"
// }, function(data) {
//     console.log("Got your message:", data);
// });


$("#message-form").on("submit", function(ev) {
    ev.preventDefault();
    
    var messageBox = $("#message-box");

    socket.emit("receiveChat", {
        from: "User",
        text: messageBox.val()
    }, function(data) {
        messageBox.val("");
    });
});



locationBtn.on("click", function() {

    var locationBtn = $("#send-location");

    locationBtn.attr("disabled", "disabled").text("Sending Location...");
    
    if ("geolocation" in navigator) {
        // console.log("Geolocation is available");

        navigator.geolocation.getCurrentPosition(function(position) {

            socket.emit("createLocationMessage", {
                latitude:  position.coords.latitude, 
                longitude: position.coords.longitude
            });


        }, function(err) {
            alert("Unable to fetch location");
        });

      } else {
        alert("Geolocation is not available");
      }
});


socket.on("disconnect", function() {
    console.log("disconnected from server");
});