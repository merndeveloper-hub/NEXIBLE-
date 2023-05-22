const { find } = require("../../../helpers");

const getData = async (req, res) => {

    try {
        const keyword = req.body.keyword

        const data = await find("event", {
            $or: [
                { eventName: { $regex: new RegExp(keyword + ".*", "i") } },
                { personName: { $regex: new RegExp(keyword + ".*", "i") } },
            ],
        });


        console.log(data, "data....");


        ///.*query.*/

        //Limit search Reults to 10
        searchevent = data.slice(0, 10);





        if (!data || data.length < 0, keyword == "")
            return res.status(404).json({ status: 204, message: [] });


        // const searchUser = await find("user", {
        //   full_Name: { $regex: new RegExp( keyword + ".*", "i") },
        // });

        //Limit search Reults to 10
        //searchUser = searchUser.slice(0,10);


        // if (!searchUser || searchUser.length < 0  || keyword == "") {
        //   return res
        //     .status(404)
        //     .json({ status: 204, message: [] });
        // }

        return res.status(200).json({ status: 200, message: "Events get successfully", searchevent });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: 400, message: error.message });
    }
};

module.exports = getData;
