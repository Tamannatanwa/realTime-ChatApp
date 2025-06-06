const express = require("express");
const dotenv = require("dotenv")
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMidleware");
const cors = require("cors");
const app = express()
app.use(express.json())

dotenv.config();



connectDB()


const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"], // Allow your frontend URLs
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

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

