import * as bcrypt from "bcrypt";
const hassPass = async (pass) => {
  return await bcrypt.hash(pass, 10);
};
const descriptPass = async (pass, password_encriptado) => {
  const comparePass = await bcrypt.compare(pass, password_encriptado);
  if (comparePass) {
    return "Acceso permitido";
  } else {
    return "Acceso denegdo";
  }
};
module.exports = { hassPass, descriptPass };
