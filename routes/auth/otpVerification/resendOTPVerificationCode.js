const sendOTPVerificationEmail = require("./sendOTPVerificationEmail.js");
const { deleteManyDocument } = require("../../../helpers/index");

const resendOTPVerificationCode = async (req, res) => {
  try {
    const { userId, email } = req.body;
    if ( !email) {
      throw new Error("Empty user details are not allowed");
    } else {
      const deleteOtp = await deleteManyDocument("userOTPVerification", {
      _id: userId,
      });
      
    await  sendOTPVerificationEmail(req, res);


return "send email successfully"

      // res
      //   .status(200)
      //   .json({ status: 200, message: sendOTPVerificationEmail });
    }
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
};

module.exports = resendOTPVerificationCode;
