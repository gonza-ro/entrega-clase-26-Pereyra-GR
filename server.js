const express = require('express')
const mongoose = require('mongoose')
const faker = require('@faker-js/faker')
const socket = require('socket.io');




const app = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());




/* Configuración del servidor */

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Tu servidor esta funcionando en el puerto: ', PORT);
})
server.on('error', error => console.log('Error en el servidor', error));
const io =  socket(server)

io.on('connection', socket => {
    console.log('Nuevo cliente conectado');

    socket.emit('mensajes', mensajes)

    socket.on('mensaje', data => {
        mensajes.push({socketid: socket.id, mensaje: data})
        io.sockets.emit('mensajes', mensajes)
    });
});
