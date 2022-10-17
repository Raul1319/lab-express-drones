const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")

const droneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})


const Drone = mongoose.model("Drone", droneSchema);

module.exports = Drone