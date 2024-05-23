var bcrypt = require("bcrypt");

var hassPass = async function (pass) {
  return await bcrypt.hash(pass, 10);
};

var descriptPass = async function (pass, password_encriptado) {
  return await bcrypt
    .compare(pass, password_encriptado)
    .then(function (comparePass) {
      if (comparePass) {
        return "Acceso permitido";
      } else {
        return "Acceso denegado";
      }
    });
};

module.exports = { hassPass: hassPass, descriptPass: descriptPass };
