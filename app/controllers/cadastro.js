module.exports.cadastro = (application, req, res)=>{
  res.render('cadastro',{validacao:{},dadosForm:{}});
}

module.exports.cadastrar = (application, req, res)=>{
  
  let dadosForm = req.body  

  req.assert('nome', 'Nome não pode ser vazio').notEmpty();
  req.assert('usuario','Usuário não pode ser vazio').notEmpty();
  req.assert('senha','Senha não pode ser vazio').notEmpty();
  req.assert('casa','Casa não pode ser vazio');

  let err = req.validationErrors();

  if(err){
    res.render('cadastro',{validacao:err,dadosForm:dadosForm});
    return;
  }
  res.send("podemos cadastrar");
}