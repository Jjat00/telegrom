const Model = require("./model");

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    const messages = Model.find(filter)
      .populate("user")
      .catch((err) => {
        reject(err);
      });
    resolve(messages);
  });
};

const updateMessage = async (id, message) => {
  const res = await Model.findOne({
    _id: id,
  });
  res.message = message;
  const newMessage = res.save();
  return newMessage;
};

const deleteMessage = async (id) => {
  const res = await Model.findOne({
    _id: id,
  });
  const newMessage = res.remove();
  return newMessage;
};

module.exports = {
  create: addMessage,
  find: getMessages,
  updateMessage,
  deleteMessage,
};
