module.exports = (application)=>{
	application.get('/cadastro',(req, res)=>{
		res.render('cadastro')
	});
}