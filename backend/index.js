
const app = require("express")(); //initialize an express app
const server = require("http").createServer(app); //create the server
const cors = require("cors"); //for cross origin requests
console.log("h")
const io = require("socket.io")(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            credentials: true
        }
}); 
//initializing the socket.io server with cors setup to make requests to the server from any (domain, url or port)
app.use(cors());
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.send("Server is running properly");
})

/* Socket functions for signaling once the connection is made */
io.on("connection", (socket) => { //This is a realtime listener listening for a connection from the client
    console.log(socket.id)
    socket.emit("me", socket.id);//Once the connection is established it will emit the id associated with the connection 
    socket.on("calluser", ({ userToCall, signalData, from, name}) => {
        io.to(userToCall).emit("calluser", {signal: signalData, from, name});
    });
    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", {signal: data.signal});
    })
    socket.on("disconnect", () => {
        socket.broadcast.emit("callended");
    });
})

{/* Socket functions for signaling once the connection is made */}

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
}); //we need to specify a port on which the server listens for requests