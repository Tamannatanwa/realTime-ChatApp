const express = require("express");
const dotenv = require("dotenv")
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const app = express()
app.use(express.json())

dotenv.config();

connectDB()

// app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello Users!")
})

app.use("/api/user",userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

