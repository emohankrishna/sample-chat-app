const socket = io();
socket.on('connect', () => {
    console.log("Connected to Server");
});

socket.on('disconnect', () => {
    console.log("Server is Down");
})

socket.on('serverEmit',(message) =>{
console.log("Got the message : ",message);
});

socket.emit('clientEmit',{content:"Hey i am clint",from:"mohan ede",time:new Date()});