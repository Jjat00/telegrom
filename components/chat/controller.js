const store = require("./store");

const create = (users) => {
console.log("🚀 ~ file: controller.js ~ line 4 ~ create ~ users", users)
  if (!users || !Array.isArray(users)) {
    return Promise.reject(new Error("Invalid parameters."));
  }
  const chat = {
    users: users,
  };
  return store.create(chat);
};

const find = (userId) => {
  return store.find(userId);
};

module.exports = {
  create,
  find,
};
