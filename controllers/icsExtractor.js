const ical = require("node-ical")
const icsModel = require("../models/ics.model");
const { icalParser } = require("../actions/icsParser");
const icsExtractor = async (req,res)=>{
    try {

        const {villaId}  = req.params;
        try {
            const data = await icsModel.find({
                villaId : villaId
            })
            const {icsContent} = data[0];
            const temp = await icalParser(icsContent)
            return res.status(200).send(temp)
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {icsExtractor}