const Joi = require("joi");
const { findOne, insertNewDocument } = require("../../../helpers");
const event = require("../../../models/event");
const cloudinary = require("cloudinary").v2;

const schema = Joi.object({
  organizerName: Joi.string(),
  personName: Joi.string(),
  eventName: Joi.string(),
  description: Joi.string(),
  loc: Joi.string(),
  price: Joi.number(),
  place: Joi.string(),
  category: Joi.string(),
  startDate: Joi.date().raw().required(),
  endDate: Joi.date().raw().required(),
  image: Joi.array(),
  image_url: Joi.array(),
  nftPasses: Joi.string(),
});

const createEvent = async (req, res) => {
  try {
    await schema.validateAsync(req.body);

    const _id = req.params.id;

    let user = await findOne("user", { _id });
    if (!user) {
      return res.status(400).send({ status: 400, message: "No User Found" });
    }

    console.log(user, "user....");

    const urls = [];
    const urls1 = [];
    const files = req.files.image;
    const files1 = req.files.passImage;
    console.log({ files, files1 });
    if(files1 === undefined){
      return res.status(400).send({ status: 400, message: "No Nft pass Found" });

    }else{

    for (const file of files) {
      const { path } = file;

      const newPath = await cloudinary.uploader.upload(path);

      // console.log(newPath, "newPath...");
      urls.push(newPath);

      //    console.log(urls, "urls...");
    }
    for (const file1 of files1) {
      const { path } = file1;

      const newPath = await cloudinary.uploader.upload(path);

      // console.log(newPath, "newPath...");
      urls1.push(newPath);

      //    console.log(urls, "urls...");
    }

    //         urls.map((images) => {
    //  const imageUrl =  images.public_id
    //  const imagePhoto =  images.secure_url

    // //    console.log(imageUrl, "imageurl");
    // //    console.log(imagePhoto, "imagePhoto");
    // })

    // console.log(imageUrl, "imageurl");
    //     console.log(imagePhoto, "imagePhoto");
    //Create instance of Events user
    let events = new event({
      organizerName: req.body.organizerName,
      personName: req.body.personName,
      eventName: req.body.eventName,
      description: req.body.description,
      loc: req.body.loc,
      price: req.body.price,
      place: req.body.place,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      bundle_image: {
        image: urls.map((url) => url.secure_url),
        image_url: urls.map((url) => url.public_id),
      },
      userID: _id,
      category: req.body.category.split(","),
      nftPasses: JSON.parse(req.body.nftPasses),
      passImage: urls1.length ? urls1[0].secure_url : "",
    });
    // console.log(req.body);
    // //   console.log(events, "events..");

    const eventCreate = await insertNewDocument("event", events);

    //    console.log(eventCreate, "eventcreate");

    return res
      .status(200)

      .send({
        status: 200,
        message: "Event created Successfully",
        eventCreate,
      });
    }

  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};
module.exports = createEvent;
