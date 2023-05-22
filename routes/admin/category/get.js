//const { find } = require("../../../helpers");
const category = require("../../../models/category")

const getcategory = async (req, res) => {
    try {
        const { education, food, music, painting, sports, other, select } = req.query;

        console.log(req.query);
        let queryObj = {};

        if (education) {
            queryObj.education = { $in: education.split(",") };
        }

        if (food) {
            queryObj.food = { $in: food.split(",") };
        }

        if (music) {
            queryObj.music = { $in: music.split(",") };
        }

        if (painting) {
            queryObj.painting = { $in: painting.split(",") };
        }

        if (sports) {
            queryObj.sports = { $in: sports.split(",") };
        }

        if (other) {
            queryObj.other = { $in: other.split(",") };
        }


        console.log(queryObj, "obej....");

        const apiData = category.find(queryObj);

        if (select) {

            let selectFix = select.split(",").join(" ");
            console.log(selectFix, "selectFix");
            apiData1 = apiData.select(selectFix);
            // console.log(apiData1,"apiData1...");

        }

        //  console.log(apiData1, "apiData...........");

        const Data = await apiData;

        return res.json({ status: 200, msg: Data, nbHits: Data.length });

    } catch (error) {
        console.log(error);
        return res.json({ status: 500, message: error.message });
    }
};

module.exports = getcategory;
