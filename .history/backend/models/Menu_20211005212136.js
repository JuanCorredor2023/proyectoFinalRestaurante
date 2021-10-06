const mongoose = require("mongoose")
const { Schema } = mongoose

const menuSchema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        file: {type: String, required: true},
        type: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("Menu", menuSchema, "menus")