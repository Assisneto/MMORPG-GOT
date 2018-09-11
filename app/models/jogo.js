class Jogo {
  constructor(connection){
    this._connection = connection;
  }
  gerarParametros(usuario){
    let dados = {
      operacao: "gerarParametros",
      usuario: usuario,
      collection: "jogo",
      callback: function(err, result) {
        }
      };
    this._connection(dados);
    };
  iniciaJogo(usuario,req,res){ 
    let dados = {
    operacao: "inicioJogo",
    usuario:usuario,
    collection: "jogo",
    callback: function(err, result) {
      }
    };
  this._connection(dados,req,res);
  };
}  

module.exports = () =>{
  return Jogo;
}