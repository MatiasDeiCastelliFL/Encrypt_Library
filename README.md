import*as bcrypt from"bcrypt";

consthassPass=async(pass)=>{

  returnawait bcrypt.hash(pass, 10);

};

constdescriptPass=async(pass, password_encriptado)=>{

  const comparePass =await bcrypt.compare(pass, password_encriptado);

  if(comparePass){

    return"Acceso permitido";

  }else{

    return"Acceso denegdo";

  }

};

module.exports={ hassPass, descriptPass };
