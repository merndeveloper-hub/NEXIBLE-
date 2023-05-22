// const { find } = require("../../../helpers");

// const category = async (req, res) => {
//     try {
//         const { select } = req.query;

//         let queryObj = {};


//         const apiData = await find("event", queryObj);

//         if (select) {
//             let selectFix = select.split(",").join(" ");
//             apiData = apiData.select(selectFix);
//         }

//         console.log(apiData, "apiData...........");

//         const Data = await apiData;

//         return res.json({ status: 200, msg: apiData, nbHits: apiData.length, Data });
//     } catch (error) {
//         console.log(error);
//         return res.json({ status: 500, message: "Oops not selected" });
//     }
// };

// module.exports = category;
