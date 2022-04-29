const express = require("express");
const responde = require("./../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", (req, res) => {
  const filterMessages = req.query.user || null;
  controller
    .findMessages(filterMessages)
    .then((messages) => {
      responde.success(req, res, messages);
    })
    .catch((err) => {
      responde.error(req, res, err);
    });
});

router.post("/", (req, res) => {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message)
    .then((message) => {
      responde.success(req, res, message, 201);
    })
    .catch((err) => {
      responde.error(req, res, err.message, 400);
    });
});

router.patch("/:id", (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((message) => {
      responde.success(req, res, message);
    })
    .catch((err) => {
      responde.error(req, res, err);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then((message) => {
      responde.success(req, res, message);
    })
    .catch((err) => {
      responde.error(req, res, err);
    });
});

module.exports = router;
