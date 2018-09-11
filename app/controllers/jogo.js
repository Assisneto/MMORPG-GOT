module.exports.jogo = (application,req,res)=>{
		
	if(req.session.autorizado !== true)
		res.render('index',{validacao:{}});
	else {
		let usuario = {usuario:req.session.usuario, casa:req.session.casa}
		let connection = application.config.connectionFactory;
		let jogo = new application.app.models.jogo(connection);

		jogo.iniciaJogo(usuario,req,res);
		
	}
	

}
module.exports.sair = (application,req,res)=>{
	
	req.session.destroy(()=>{
		res.render('index',{validacao:{}})
	});

}