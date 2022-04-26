const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(router);

router.get("/", (req, res) => {
  res.send("Hello World!!!");
});

router.post("/", (req, res) => {
  const responde = {
    message: "Hello World!!!",
    data: req.body,
    query: req.query,
  };
  res.send(responde);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
