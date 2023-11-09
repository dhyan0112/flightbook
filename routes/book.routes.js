const express = require("express")
const { BookModel } = require("../model/booking.model")
const jwt = require("jsonwebtoken")

const bookingRouter = express.Router()


bookingRouter.get("/dashboard",async (req, res) => {
    const books=await BookModel.find()
    res.send(books)
})

bookingRouter.post("/booking", async (req, res) => {
    const payload = req.body
    const book = new BookModel(payload)
    await book.save()
    res.send({ "msg": "Bookings created" })
})

bookingRouter.patch("/dashboard/:id", async (req, res) => {
    const bookID=req.params.id
    const payload=req.body
    await BookModel.findByIdAndUpdate({_id:bookID},payload)
 
     res.send({"msg":`Bookings with id${bookID} has been updated`})
 })

bookingRouter.delete("/dashboard/:id", async (req, res) => {
   const bookID=req.params.id
   await BookModel.findByIdAndDelete({_id:bookID})

    res.send({"msg":`Bookings with id${bookID} has been Deleted`})
})

module.exports = {
    bookingRouter
}