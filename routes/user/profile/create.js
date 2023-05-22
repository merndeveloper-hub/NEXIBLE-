const Joi = require("joi");
const profile = require("../../../models/Profile/index");
const { findOne, insertNewDocument } = require("../../../helpers/index");
const cloudinary = require("cloudinary").v2;

const schema = Joi.object({
  username: Joi.string(),
  email: Joi.string(),
  wallet: Joi.string(),
  city: Joi.string(),
  gender: Joi.string(),
  category: Joi.string(),
  preference: Joi.string(),
  profile_img: Joi.string(),
  profile_img_url: Joi.string(),
  company_description: Joi.string(),
  login_prefrence: Joi.string(),
  verified: Joi.boolean(),
});

const createProfile = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    //  const { email } = req.body;
    const _id = req.params.id;

    let user = await findOne("user", { _id });
    if (!user) {
      return res.status(400).send({ status: 400, message: "No User Found" });
    }

    console.log(user, "user....");

    // if (email) {
    //     let check_email = await findOne("user", { email });
    //     if (check_email) {
    //         if (user.email !== email) {
    //             return res.status(400).send({
    //                 status: 400,
    //                 message: "User already exist with this email",
    //             });
    //         }
    //     }
    // }

    const result = await cloudinary.uploader.upload(req?.file?.path);

    console.log(result, "result..");

    // Create instance of Profile user
    let profileUser = new profile({
      ...req.body,
      profile_img: result.secure_url,
      profile_img_url: result.public_id,
      userID: _id,
    });

    console.log(profileUser, "profileuser.....");

    const profileCreate = await insertNewDocument("profile", profileUser);

    return res.status(200).json({
      status: 200,
      message: "User Profile created Successfully",
      profileCreate,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = createProfile;
