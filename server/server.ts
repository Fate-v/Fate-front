const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const listen = require('socket.io');
const app = next({dev})
const port = 'http://localhost:5000';
const handle = app.getRequestHandler()

// app.prepare()
// .then(() =>{
//     const server = express();

//     server.get('*',(req:any,res:any) => {
//         return handle(req,res);
//     })


// })

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


export{}