const { cloud_name, api_key, api_secret } = require("../../config");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

exports.uploads = (file, folder) => {
  return new Promise(resolve => {
      cloudinary.uploader.upload(file, (result) => {
          resolve({
              url: result.url,
              id: result.public_id
          })
      }, {
          resource_type: "auto",
          folder: folder
      })
  })
}



module.exports = cloudinary;


