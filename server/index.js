const express = require('express');
const socketio = require('socket.io')(httpServer, {
    cors: {
        origin: "http://localhost:5000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

// build in module
const http = require('http');


const PORT = process.env.PORT || 5000;

const router = require('./router');

// setting up the socket.io
const app = express();

const server = http.createServer(app);
const io = socketio(server);

// using the build in method to register clients joining and leving our app
io.on('connection', (socket) => {
    console.log(('We have new connection!!!'));

    socket.on('join', ({name, room }, callback) => {
        console.log(name, room);

        
    })

    socket.on('disconnect', () => {
        console.log('User had left!!!');
    })
})

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))
 