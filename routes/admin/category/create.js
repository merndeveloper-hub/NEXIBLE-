const Joi = require("joi");
const { findOne, insertNewDocument } = require("../../../helpers");
//const category = require("../../../models/category");




const schema = Joi.object({

    education: Joi.string(),
    music: Joi.string(),
    food: Joi.string(),
    sports: Joi.string(),
    painting: Joi.string(),
    other: Joi.string(),

});

const createCategory = async (req, res) => {
    try {
       await schema.validateAsync(req.body);


        const categoryCreate = await insertNewDocument("category", { ...req.body })


        console.log(categoryCreate, "categoryCreate");

        return res
            .status(200)
            .send({ status: 200, message: "Category created Successfully", categoryCreate });
    } catch (e) {
        console.log(e);
        return res.status(400).send({ status: 400, message: e.message });
    }
};

module.exports = createCategory;