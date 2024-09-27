const mongoose = require("mongoose");

// Platoon = מחלקה
const Platoon = new mongoose.Schema({
    name: {
        type: String,
        nullable: false,
    },
    sectionIds : {
        type : [mongoose.Schema.Types.ObjectId],
        nullable : false,
    },
    commander: {
        type: String,
        nullable: false,
    },
});

module.exports = mongoose.model("Platoon", Platoon);