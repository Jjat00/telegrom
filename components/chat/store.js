const Model = require("./model");

const create = (chat) => {
console.log("🚀 ~ file: store.js ~ line 4 ~ create ~ chat", chat)
  const myChat = new Model(chat);
  return myChat.save();
};

const find = (chat) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (chat !== null) {
      filter = { users: chat };
    }
    const chats = Model.find(filter)
      .populate("users")
      .catch((err) => {
        reject(err);
      });
    resolve(chats);
  });
};

module.exports = {
  create,
  find,
};
