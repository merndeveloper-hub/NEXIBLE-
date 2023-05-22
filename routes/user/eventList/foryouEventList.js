const { find } = require("../../../helpers");

const foryouEventList = async (req, res) => {
  try {
    let { category } = req.body;
    console.log(category);
    const eventList = await find("event", { category: { $in: category } });
    return res.status(200).send({ status: 200, foryou: eventList });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

const MyEventList = async (req, res) => {
  try {
    let { userId } = req.body;
    console.log(userId);
    const eventList = await find("event", { userID: userId });
    return res.status(200).send({ status: 200, myEvent: eventList });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};
const HostEventList = async (req, res) => {
  try {
    const HostId = await find("userType", { type: "Host" });
    const HostUsers = await find("user", { type: HostId[0]._id });
    console.log(HostUsers);
    const eventList = await find("event", {
      userID: { $in: HostUsers.map((val) => val._id) },
    });
    return res.status(200).send({ status: 200, HostEvents: eventList });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};
const MemberEventList = async (req, res) => {
  try {
    const MemberId = await find("userType", { type: "Member" });
    const MemberUsers = await find("user", { type: MemberId[0]._id });
    console.log(MemberUsers);
    const eventList = await find("event", {
      userID: { $in: MemberUsers.map((val) => val._id) },
    });
    return res.status(200).send({ status: 200, MemberEvent: eventList });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};
module.exports = {
  foryouEventList,
  MyEventList,
  HostEventList,
  MemberEventList,
};
