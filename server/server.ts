const express = require('express');
const listen = require('socket.io');
const app = express();
const port = 3000;


const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});


const io = listen(server);



io.on('connect', (socket:any) => {
    let user = '';
    
    socket.broadcast.emit('join', (data: { username: string; }) => {
      user = data.username;
    });

    socket.on('sendMessage', (data: { message: string,user:string }) => {
        io.emit('receiveMessage', { 
            username: user,
            message: data.message 
        });
    });
    
    socket.on('disconnect', () => {
        socket.broadcast.emit('leave', { user });
    });

});