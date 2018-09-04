module.exports.index = (application,req,res)=>{
		res.render('index',{validacao:{}})
}
module.exports.autenticar = (application,req,res)=>{
	
	let dadosForm = req.body;

	req.assert('usuario','Usuario não pode ser vazio').notEmpty();
	req.assert('senha','Senha não pode ser vazia').notEmpty();

	let err = req.validationErrors();
	console.log(JSON.stringify(err));
	if(err){
		res.render('index',{validacao:err})
		return;
	}

	let connection = application.config.connectionFactory;  
	let usuarios = new application.app.models.usuarios(connection)
	
	usuarios.autenticar(dadosForm,req,res);
	return;
}