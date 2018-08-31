module.exports = () =>{
  return usuarios;
}
class usuarios {
  constructor(connection){
    this._connection = connection;
  }
  inserirUsuario(usuario){
    let dados = {
      operacao: "inserir",
      usuario: usuario,
      collection: "usuarios",
      callback: function(err, result) {
        }
      };
    this._connection(dados);
    };
  }
