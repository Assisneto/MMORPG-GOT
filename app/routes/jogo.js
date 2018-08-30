module.exports = (application)=>{
	application.get('/jogo',(req, res)=>{
		res.render('jogo')
	});
}