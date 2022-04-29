const Model = require("./model");

const create = async (user) => {
  const myUser = new Model(user);
  const res = await myUser.save();
  return res;
};

const find = async (filterUser) => {
  if (!filterUser) {
    return await Model.find();
  }
  return await Model.find({
    user: filterUser,
  });
};

module.exports = {
  create,
  find,
};
