const express = require("express")
const { FlightModel } = require("../model/flight.model")
const jwt = require("jsonwebtoken")

const flightRouter = express.Router()


flightRouter.get("/flights",async (req, res) => {
    const flights=await FlightModel.find()
    res.send(flights)
})

flightRouter.get("/flights/:id",async (req, res) => {
    const flightID=req.params.id
    const flight=await FlightModel.findById({_id:flightID})
    res.send(flight)
})

flightRouter.post("/flights", async (req, res) => {
    try {
        const payload = req.body
        const flight = new FlightModel(payload)
        await flight.save()
        res.send({ "msg": "Flight created" })
    } catch (err) {
        res.send(err.message)
    }
})

flightRouter.patch("/flights/:id", async (req, res) => {
    const flightID=req.params.id
    const payload=req.body
    await FlightModel.findByIdAndUpdate({_id:flightID},payload)
 
     res.send({"msg":`Flight with id${flightID} has been updated`})
 })

flightRouter.delete("/flights/:id", async (req, res) => {
   const flightID=req.params.id
   await FlightModel.findByIdAndDelete({_id:flightID})

    res.send({"msg":`Flight with id${flightID} has been Deleted`})
})

module.exports = {
    flightRouter
}