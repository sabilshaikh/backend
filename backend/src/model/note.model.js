const mongoose = require("mongoose");

const noteSchema = new  mongoose.Schema({
title : String,
description : String ,
})

const noteModel = mongoose.model("Sabil's data", noteSchema);

module.exports = noteModel