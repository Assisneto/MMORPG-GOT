module.exports.jogo = (application,req,res)=>{
		
	req.session.autorizado == true ? res.render('jogo'): res.render('index',{validacao:{}});

}
module.exports.sair = (application,req,res)=>{
	
	req.session.destroy(()=>{
		res.render('index',{validacao:{}})
	});

}