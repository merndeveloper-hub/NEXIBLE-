const { find } = require("../../../helpers");


const allCategory = async (req, res) => {
	try {
		
		
        const category = await find("category");

        if(!category) {
            return res.status(404).send({ status: 404, message: "No Category Found" });
        }
		
		
		return res.status(200).send({ status: 200, category,mainCategoies:["education","music","food","sports","painting","other"] });
		
	} catch (e) {
		console.log(e);
		return res.status(400).send({ status: 400, message: e.message });
	}
};

module.exports = allCategory;
