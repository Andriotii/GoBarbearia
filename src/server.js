const express = require("express"); // importando o express
const nunjucks = require("nunjucks");
const path = require("path"); // path = lidando com caminhos do servidor

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV != "production"; //verificando se está em desenvolvimento
    this.middlewares();
    this.views();
    this.routes();
  }
  middlewares() {
    this.express.use(express.urlencoded({ extended: false })); //Formulario
  }
  views() {
    nunjucks.configure(path.resolve(__dirname, "app", "views"), {
      watch: this.isDev, //ambiente de desenvolvimento
      express: this.express, //servidor
      autoescape: true
    });
    this.express.use(express.static(path.resolve(__dirname, "public"))); //servindo arquivo publicos
    this.express.set("view engine", "njk");
  }
  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;
