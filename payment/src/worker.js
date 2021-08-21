let amqplib = require("amqplib");
const { Payment } = require("./payment.model");

let q = "ms_payments";

//worker to save transaction history
amqplib.connect(process.env.rabbitmqurl).then(async (conn, err) => {
  if (err) {
    return console.warn();
  }
  let channel = await conn.createChannel();
  await channel.assertQueue(q);
  channel.consume(q, async function (msg) {
    if (msg !== null) {
      let data = JSON.parse(msg.content.toString());
      let paymentHistory = await Payment.create({ ...data });
      channel.ack(msg);
    }
  });
});
