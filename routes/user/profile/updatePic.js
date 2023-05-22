const Joi = require("joi");
const { findOne, updateDocument } = require("../../../helpers");
const cloudinary = require("cloudinary").v2;

const schema = Joi.object({
  profile_img: Joi.string(),
});

const updatePic = async (req, res) => {
  try {
    await schema.validateAsync(req.body);
    console.log(req.body);
    console.log(req.file);

    const _id = req.params.id;

    let profile = await findOne("profile", { _id });
    if (!profile) {
      return res.status(400).send({ status: 400, message: "No User Found" });
    }

    if (req?.file?.path) {
      const profileImage = await cloudinary.uploader.upload(
        req?.file?.path
      );
      // req.body = profileImage.url;
      userProfile = await updateDocument(
        "profile",
        { _id },
        { profile_img: profileImage.url }
      );
  
      return res
        .status(200)
        .send({ status: 200, message: "User Updated Successfully", userProfile });
    }

  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = updatePic;
