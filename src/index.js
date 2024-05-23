var bcrypt = require("bcrypt");

var hassPass = function (pass) {
  return bcrypt.hash(pass, 10);
};

var descriptPass = function (pass, password_encriptado) {
  return bcrypt.compare(pass, password_encriptado).then(function (comparePass) {
    if (comparePass) {
      return "Acceso permitido";
    } else {
      return "Acceso denegado";
    }
  });
};

module.exports = { hassPass: hassPass, descriptPass: descriptPass };
