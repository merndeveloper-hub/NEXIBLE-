const mongoose = require("mongoose");
const SchemaType = require("../../types");

const categorySchema = new mongoose.Schema(
    {
        education  : {
            type: SchemaType.TypeString,
           

        },

        music: {
            type: SchemaType.TypeString,
         
        },
     
        food: {
            type: SchemaType.TypeString,
          
        },

        sports: {
            type: SchemaType.TypeString,
         
        },

        painting: {
            type: SchemaType.TypeString,
           
        },

        other: {
            type: SchemaType.TypeString,
           
        },

      
    },
    { timestamps: true }
);



module.exports = categorySchema;














