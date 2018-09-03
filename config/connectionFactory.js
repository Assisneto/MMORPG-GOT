var mongo = require("mongodb").MongoClient;			
var assert = require("assert");			

const dbName = "got";			
const url = "mongodb://localhost:27017"+dbName;			

let connMongoDB = function(dados, req = 0,res = 0) {			
		mongo.connect(url,{useNewUrlParser:true}, function(err, client) {			
		assert.equal(null, err);			
		console.log("Connected successfully to server");			
		const db = client.db(dbName);			
		query(db, dados,req,res);			
		client.close();			
	});			
};			
function query(db, dados,req,res) {			
	let collection = db.collection(dados.collection);			
	switch (dados.operacao) {			
		case "inserir":			
			collection.insertOne(dados.usuario, dados.callback);			
		break;
		case "autenticar":
			collection.find(dados.usuario).toArray((err,results)=>{	
				
				if (results[0]!= undefined) {
					req.session.autorizado = true;

					req.session.usuario = results[0].usuario
					req.session.casa = results[0].casa;
				}
				
				req.session.autorizado == true ? res.redirect("jogo") : res.render('index',{validacao:{}});

			});
		break;			
	default:			
		break;			
	}			
}			
module.exports = function() {			
return connMongoDB;			
};			