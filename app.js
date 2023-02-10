const express = require('express');
const path = require('path')

const app = express();
const server = require('http').createServer(app)

app.use(express.static(path.join(__dirname+'/public')))
//app.use(express.static('/public'));



const io = require('socket.io')(server)
/*
const io = require('socket.io')(server)


//app.use(express.static('/public'));
//app.use('/public', express.static(__dirname + '/public'))
app.use(express.static(path.join(__dirname+'/public')))


app.set('view engine', 'ejs');
app.set('views','./views')


io.on('connection', function(socket){
    socket.on('newuser', function(username){
        socket.broadcast.emit('update',username + 'entrou da conversa')
    })
    socket.on('exituser', function(username){
        socket.broadcast.emit('update',username + 'saiu da conversa')
    })
    socket.on('chat', function(message){
        socket.broadcast.emit('chat',message )
    })
})
*/

/*
app.get('/', function(req,res){
    res.render('index')
})
*/

/*
server.listen(6600, function(){
    console.log('Servidor Online')
})
*/

server.listen(3000, function(){
    console.log('OK')
})