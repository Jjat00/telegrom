const db = require("mongoose");


db.Promise = global.Promise;

const connect = async (uri) => {
  await db.connect(uri, {
    useNewUrlParser: true,
  });
  console.log("MongoDB connected");
};

module.exports = connect;