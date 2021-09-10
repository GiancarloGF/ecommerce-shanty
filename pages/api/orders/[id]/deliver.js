import nc from "next-connect"; //For connecting to db.
import Order from "models/Order"; //Model
import db from "utils/db";
import { onError } from "utils/error";
import { isAuth } from "utils/auth";

const handler = nc({
  onError,
});

handler.use(isAuth); //Verify authentication.

//PUT operation for updating orders.
handler.put(async (req, res) => {
  await db.connect(); //DB is connected.

  const order = await Order.findById(req.query.id); //One order is found by its id.

  if (order) {
    order.isDelivered = true; // isDelivered value is changed.
    order.deliveredAt = Date.now();
    const deliveredOrder = await order.save(); //The order updated is save in DB.

    await db.disconnect(); //DB is disconnected.

    res.send({ message: "order delivered", order: deliveredOrder }); //Response is send back to client.
  } else {
    await db.disconnect();
    res.status(404).send({ message: "order not found" });
  }
});

export default handler;
