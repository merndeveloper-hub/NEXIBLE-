
// var admin = require("firebase-admin");

// // var serviceAccount = require("../../../dh-access-firebase-adminsdk-au8sl-93751fff94.json");


// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount)
// // });

// // var registrationToken = "";

// // var payload = {
// //     data: {
// //         Mykey1: "Hello firebase"
// //     }
// // };

// // var options = {
// //     priority: "high",
// //     timeToLive: 60 * 60 * 24
// // };

// // admin.messaging().sendToDevice(registrationToken, payload, options)
// // .then(function (response) {
// //     console.log("Successfully sent message:", response);
// // })
// // .catch(function (error) {
// //     console.log("Error sending message:", error);
// // })

 

// const sendToAll = (req, res) => {
//     try {
       
       
       
       
       
       
       
       
//         var serviceAccount = require("../../../dh-access-firebase-adminsdk-au8sl-93751fff94.json");


//         admin.initializeApp({
//           credential: admin.credential.cert(serviceAccount)
//         });
        
//         var registrationToken = "";
        
//         var payload = {
//             data: {
//                 Mykey1: "Hello firebase"
//             }
//         };
        
//         var options = {
//             priority: "high",
//             timeToLive: 60 * 60 * 24
//         };
        
//         admin.messaging().sendToDevice(registrationToken, payload, options)
//         .then(function (response) {
//             console.log("Successfully sent message:", response);
//         })
//         .catch(function (error) {
//             console.log("Error sending message:", error);
//         })
       
       
       
       
//         // var notification = {
//         //     "title": 'Title of Notification',
//         //     "text": 'Subtitle'
//         // };

//         // var fcm_tokens = [];

//         // var notification_body = {
//         //     'notification': notification,
//         //     'registration_ids': fcm_tokens
//         // }


//         // const axiosGetCall = async () => {
//         //     try {
//         //       const response = await axios.get("https://localhost:5001/api/v1/admin/notification/sendToall");
//         //       // console.log("response", response);
//         //       // console.log(await axios.get(url));
//         //       return response.data;
//         //     } catch (error) {
//         //       // return { tokenUriError: "some error occured " };
//         //       console.error("sawq", error);
//         //     }
//         //   };

//         //   axiosGetCall()

//         // fetch("https://localhost:5001/api/v1/admin/notification/sendToall", {
//         //     'method': 'POST',
//         //     'headers': {
//         //         'Authorization': 'Key='
//         //             + 'AAAAAqMlxAA:APA91bHbXgffmy5I4XOta8W_GT_pnQzkGLR9P4iC4RqckXZ55nJaMwCruXZ8-zVuSSQ1G7Ovu2ViTz_i3ceYCe19UXf10v7m-ZdouG9ENvjJZ3wPBULx_5wI7MuMqqDU1cQW1mg9d1Up',
//         //         'Content-Type': 'application/json'
//         //     },
//         //     'body': JSON.stringify(notification_body)
//         // }).then(() => {
//         //     res.status(200).send("Notification send successfully");
//         // }).catch((error) => {
//         //     res.status(400).send("Something went wrong");
//         //     console.log(error);
//         // })

//     } catch (error) {
//         console.log(error);
//     }
// }


// module.exports = sendToAll;