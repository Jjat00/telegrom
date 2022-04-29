require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").Server(app);

const bodyParser = require("body-parser");
const socket = require("./socket");
const connectDB = require("./db");
const routes = require("./network/routes");

connectDB(process.env.MONGODB_URI);

app.use(bodyParser.json());

socket.connect(server);

routes(app);

app.use("/", express.static(__dirname + "/public"));

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
