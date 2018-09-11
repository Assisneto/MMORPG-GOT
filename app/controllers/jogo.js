module.exports.jogo = (application,req,res)=>{
		
	if(req.session.autorizado !== true)
		res.render('index',{validacao:{}});
	else {
		res.render('jogo',{img_casa:req.session.casa})
	}
	

}
module.exports.sair = (application,req,res)=>{
	
	req.session.destroy(()=>{
		res.render('index',{validacao:{}})
	});

}