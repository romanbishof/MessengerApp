const express = require('express');
const socketio = require('socket.io');

// build in module
const http = require('http');


const PORT = process.env.PORT || 5000;

const router = require('./router');

// setting up the socket.io
const app = express();

const server = http.createServer(app);
const io = socketio(server);

// using the build in method to register clients joining and leving our app
io.console('connection', (socket) => {
    console.log(('We have new connection!!!'));

    socket.on('disconnect', () => {
        console.log('User had left!!!');
    })
})

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))
 