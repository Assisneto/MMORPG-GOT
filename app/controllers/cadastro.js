module.exports.cadastro = (application, req, res)=>{
  res.render('cadastro');
}

module.exports.cadastrar = (application, req, res)=>{
  
  let dadosForm = req.body  

  req.assert('nome', 'Nome não pode ser vazio').notEmpty();
  req.assert('usuario','Usuário não pode ser vazio').notEmpty();
  req.assert('senha','Senha não pode ser vazio').notEmpty();
  req.assert('casa','Casa não pode ser vazio');

  let err = req.validationErrors();

  if(err){
    res.send('existem erros no formulario');
    return;
  }
  res.send("podemos cadastrar");
}