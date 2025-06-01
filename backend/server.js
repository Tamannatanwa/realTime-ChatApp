const express = require("express");
const dotenv = require("dotenv")
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMidleware");
const app = express()
app.use(express.json())

dotenv.config();

connectDB()

// app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello Users!")
})




app.use("/api/user",userRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

