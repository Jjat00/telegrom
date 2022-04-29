const { socket } = require("./../../socket");
const store = require("./store");

const addMessage = (chat, user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      reject(new Error("Invalid parameters."));
    }
    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
    };
    store.create(fullMessage);

    socket.io.emit("message", fullMessage);

    resolve(fullMessage);
  });
};

const findMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.find(filterUser));
  });
};

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject(new Error("Invalid parameters."));
    }
    const res = await store.updateMessage(id, message);
    resolve(res);
  });
};

const deleteMessage = (id) => {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject(new Error("Invalid id."));
    }
    const res = await store.deleteMessage(id);
    resolve(res);
  });
};

module.exports = {
  addMessage,
  findMessages,
  updateMessage,
  deleteMessage,
};
