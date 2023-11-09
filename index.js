const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.routes")
const cors=require("cors")
const { flightRouter } = require("./routes/flight.routes")
const { bookingRouter } = require("./routes/book.routes")
require('dotenv').config();

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', userRouter)
app.use('/api',flightRouter)
app.use('/api',bookingRouter)

app.listen(process.env.Port, async () => {
    try {
        await connection
        console.log("conneccted with Database")
    } catch (err) {
        console.log(err.message)
    }
    console.log(`Server is running at Port ${process.env.Port}`);
})