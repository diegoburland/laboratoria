require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = "/api/users";
    this.productPath = "/api/products";
    this.routes();
    this.connection();
    this.middlewares();
  }

  routes() {
    this.app.use(this.userPath, require("../routes/users.route"));
    this.app.use(this.productPath, require("../routes/products.route"));
    this.app.get("/", (req, res) => {
      res.status(200).send("hola mundo");
    });
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  async connection() {
    await dbConnection();
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
