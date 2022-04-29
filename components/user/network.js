const express = require("express");
const response = require("./../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", (req, res) => {
  const filterUser = req.query.user || null;
  controller
    .find(filterUser)
    .then((users) => {
      response.success(req, res, users);
    })
    .catch((err) => {
      response.error(req, res, err);
    });
});

router.post("/", (req, res) => {
  controller
    .create(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 400);
    });
});

module.exports = router;
