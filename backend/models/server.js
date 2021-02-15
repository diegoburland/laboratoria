require("dotenv").config();
const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = "/api/usuarios";
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
    this.app.use(express.static("public"));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log("Gator app listening on port ", this.port)
    );
  }
}

module.exports = Server;
