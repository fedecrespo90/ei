var _ = require('underscore');

var io, DB;

var IO = function(socketio, db) {
  io = socketio;
  DB = db;

  io.sockets.on('connection', function(socket) {
    socket.emit('ready');
  });

  return IO;
};

module.exports = IO;
