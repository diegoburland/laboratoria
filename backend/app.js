const Server = require("./models/server");

require("dotenv").config();

const App = require("./models/server");
const app = new Server();
app.listen();
