class Jogo {
  constructor(connection){
    this._connection = connection;
  }
  gerarParametros(usuario,req){
    let dados = {
      operacao: "gerarParametros",
      usuario: usuario,
      collection: "jogo",
      callback: function(err, result) {
        }
      };
    this._connection(dados,req);
    };
  iniciaJogo(usuario,req){ 
    let dados = {
    operacao: "inicioJogo",
    usuario:usuario,
    collection: "jogo",
    callback: function(err, result) {
      }
    };
  this._connection(dados,req);
  };
}  

module.exports = () =>{
  return Jogo;
}