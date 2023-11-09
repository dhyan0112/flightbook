const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    user : { type: String, ref: 'User' },
	 flight : { type: String, ref: 'Flight' }
})

const BookModel=mongoose.model("bookings",bookSchema)

module.exports={
    BookModel
}