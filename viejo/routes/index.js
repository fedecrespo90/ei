var Auth = require('../auth.js'),
    moment = require('moment');

var DB, Everyone;

var Index = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Index;
};

Index.get = function(req, res, next) {
  var rol_por_template = [null,  'operador', 'supervisor', 'administrador', 'sysAdmin'];
    res.render(rol_por_template[req.session.rol_id], {
      session: req.session,
      date: moment().format('DD/MM/YYYY - hh:mm:ss')
    });
};

module.exports = Index;
