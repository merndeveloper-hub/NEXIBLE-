
const {
  deleteManyDocument,
  updateDocument,
  find,
} = require("../../../helpers/index");
const bcrypt = require("bcryptjs");


const verifyOTP = async (req, res) => {
  try {
    const { otp } = req.body;
    if ( !otp) {
      throw Error("Empty otp details are not allowed");
    } else {
      const UserOTPVerificationRecords = await find("userOTPVerification", {
        otp: otp,
      });

      console.log(UserOTPVerificationRecords, "UserOTPVerificationRecords...");

      if (UserOTPVerificationRecords.length <= 0) {
        // no record found
        throw new Error(
          "Account record doesnot exist or has been verified already."
        );
      }
       else {
        // user otp record exists
        const { expiresAt } = UserOTPVerificationRecords[0];
        const hashedOTP = UserOTPVerificationRecords[0].otp;


        console.log(hashedOTP,"hashed...");

        if (expiresAt < Date.now()) {

          const deleteOtp = await deleteManyDocument("userOTPVerification", {
            otp:otp,
          });

           throw new Error("Code has expired. Please request again");
         } 
         else {
//          const validOTP = await bcrypt.compare(otp, hashedOTP);

const validOTP = otp

console.log(validOTP, "vaidotp...");

          if (!validOTP) {
            // supplied otp is wrong
            throw new Error("Invalid code passed. Check your inbox.");
           } 

        else {
            // success
        //    await updateDocument("user", { _id: userId }, { verified: true });
             // await userOTPVerification.deleteMany({ otp:otp });
            await deleteManyDocument("userOTPVerification", {otp: otp });
            
            res.status(200).json({
              status: "VERIFIED",
              message: "User email verified successfully.",
            });
          }
        }
       }
     }
   } 
  catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
};

module.exports = verifyOTP;
