require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = "/api/users";
    this.connection();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use(this.userPath, require("../routes/users.route"));
    this.app.get("/", (req, res) => {
      res.status(200).send("hola mundo");
    });

    this.app.post("/", (req, res) => {
      res.send("hola mundo");
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
    this.app.listen(this.port, () =>
      console.log("Gator app listening on port ", this.port)
    );
  }
}

module.exports = Server;
