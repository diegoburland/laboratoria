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
    this.middlewares();
    this.routes();
    this.connection();
  }

  routes() {
    this.app.use(this.userPath, require("../routes/users.route"));
    this.app.use(this.productPath, require("../routes/products.route"));
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
