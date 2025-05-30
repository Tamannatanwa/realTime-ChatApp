const express = require("express");
const dotenv = require("dotenv")
const chats = require("./data/data");
const app = express()

dotenv.config();

// app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello Users!")
})

app.get("/api/chat", (req, res) => {
    res.send(chats)
})

app.get("/api/chat/:id", (req, res) => {
    const signleChat = chats.find((c) =>
        c._id === req.params.id)
    res.send(signleChat)
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

