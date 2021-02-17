const Server = require("./server/server");

require("dotenv").config();

const App = require("./server/server");
const app = new Server();
app.listen();
