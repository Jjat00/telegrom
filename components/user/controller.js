const store = require("./store");

const create = (user) => {
    if (!user) {
      return Promise.reject(new Error("Invalid user."));
    }
    return store.create(user);
};

const find = (filterUser) => {
  return new Promise(async (resolve, reject) => {
    resolve(await store.find(filterUser));
  });
};

module.exports = {
  create,
  find,
}