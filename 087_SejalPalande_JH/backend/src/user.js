const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "webexam",
};

const record = {
  sender: "sejal",
  receiver: "teju",
  msg: "how are you",
};

const addRecord = async (record) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const sql = `insert into message(sender,receiver, msg) values(?,?,?)`;
  await connection.queryAsync(sql, [
    record.sender,
    record.receiver,
    record.msg,
  ]);
  await connection.endAsync();
  console.log("record added");
};
//addRecord(record);
const getRecord = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const sql = `select * from message`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log("list of records");
  console.log(list);
  return list;
};
getRecord();
module.exports = { addRecord, getRecord };
