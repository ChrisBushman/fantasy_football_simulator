const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const PORT = 8081;


global.appRoot = path.resolve(__dirname);

let gameServer = http.createServer(app);

let io = new Server(gameServer);

// Configure Express
app.use(bodyParser.json());
app.use('/', express.static(appRoot + '/app/client'));
app.use('/assets', express.static(appRoot + '/app/assets'));

require(appRoot + '/app/routes/routes')(app);

gameServer.listen(PORT, () => {
  console.log('We are live on ' + PORT)
});

io.on('connection', (socket) => {
    socket.on('clientReady', () => {
        console.log("Phaser client is ready")
    })
});