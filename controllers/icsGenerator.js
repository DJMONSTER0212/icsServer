const ical = require('ical-generator')
const icsModel = require("../models/ics.model")
const icsGen = async (req,res)=>{
    try {
        const body = await req.json()
        const {villaId} = body;

        const calendar = ical({ name: 'my first iCal' });
        const startTime = new Date();
        const endTime = new Date();
        endTime.setHours(startTime.getHours() + 1);
        const temp = calendar.createEvent({
            start: startTime,
            end: endTime,
            summary: 'Example Event',
            description: 'It works ;)',
            location: 'my room',
            url: 'http://sebbo.net/'
        });

        const icsContent = calendar.toString();
        const newICS = await icsModel.create({
            villaId,
            icsContent
        })

        res.status(200).send(newICS);
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error(error.message)
    }
}

module.exports = {icsGen}