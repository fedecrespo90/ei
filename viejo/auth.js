var url = require('url'),
    _ = require('underscore');
var DB;

var Auth = function(db) {
  DB = db;

  return Auth;
};

Auth.restrict = function(req, res, next) {
  var paths_per_role = [
    // Dummy
    null,
    //OPERADOR
    ['/','/cliente'],
    //SUPERVISOR
    ['/','/cliente'],
    //ADMINISTRADOR
    ['/','/cliente'],
    //SYSADMIN
    ['/','/cliente']
  ];

  var url_parts = url.parse(req.url, true),
//      isNotAdmin = req.session.rol_id <= 3,
      roleArray = paths_per_role[req.session.rol_id];
      cannotPass = _.indexOf(roleArray, url_parts.path) === -1;
  if (!req.session.usuario || !req.session.usuario_id || !req.session.rol_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

Auth.doLogin = function(user, pass, fn) {
  DB.Usuario.find({
    where: { usuario: user, pass: pass }
  }).success(function(usuario) {
    fn(usuario);
  }).error(function(err) {
    fn(new Error('Usuario o contrase&ntilde;a incorrectos'));
  });
};

module.exports = Auth;
