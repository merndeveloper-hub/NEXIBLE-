const {
  findOne,
  updateDocument,
  insertNewDocument,
  pushIntoArray,
} = require("../../../helpers");
//const { find } = require("../../../helpers");
//const event = require("../../../models/event/index");
const ticket = require("../../../models/Tickets/index");

const buyEvents = async (req, res) => {
  try {
    const userId = req.params.userId;
    const _id = req.params.id;
    const passId = req.body.nftPassId;

    const user = await findOne("user", { _id: userId });
    console.log(user, "user...");

    if (!user) {
      return res.status(404).send({ status: 404, message: "No User Found" });
    }
    const eventss = await findOne("event", { _id: _id });

    console.log(eventss, "events...");

    if (!eventss) {
      return res.status(404).send({ status: 404, message: "No Events Found" });
    }
    if (passId) {
      let Tickets = new ticket({
        eventID: _id,
        userID: userId,
        nftPassId: passId,
      });

      console.log(Tickets, "Tickets.....");

      const TicketsCreate = await insertNewDocument("tickets", Tickets);
      console.log(TicketsCreate);
    }
    const remainingTicket = eventss.remainingticket - 1;

    console.log(remainingTicket, "remainingTicket..");

    const soldTicket = eventss.soldticket + 1;
    console.log(soldTicket, "soldTicket...");

    const eventsupdate = await updateDocument(
      "event",
      { _id },
      {
        soldticket: soldTicket,
        remainingticket: remainingTicket,
        status: "Sold",
      }
    );

    return res
      .status(200)
      .send({ status: 200, eventsupdate, buy: "TicketsCreate" });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = buyEvents;
