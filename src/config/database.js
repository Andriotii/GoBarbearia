module.exports = {
  dialect: "postgres",
  host: "127.0.0.1", //endereço base de dados
  username: "postgres",
  password: "andrioti1999",
  database: "barbearia",
  operatorAliases: false,
  define: {
    timestamps: true, //cria automaticamente o campo de update
    underscored: true,
    underscoredAll: true
  }
};
