const expressAsyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const genrateToken = require("../config/genrateToken");


const registerUser = expressAsyncHandler(
    async (req, res) => {
        const { name, email, password, pic } = req.body

        if (!name || !email || !password) {
            res.status(400);
            throw new Error("Please Enter all the Feilds")

        }
        const existUser = await User.findOne({ email })
        if (existUser) {
            res.status(400);
            throw new Error("User Already exists")
        }

        const user = await User.create({
            name, email, password, pic
        })

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                pic: user.pic,
                token: genrateToken(user._id)
            })
        }
        else {
            res.status(400);
            throw new Error("Failed to Create the User")
        }
    }
)




const authUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: genrateToken(user._id)
        })
    }
    else {
        res.status(401); // Unauthorized
        throw new Error("Invalid email or password");
    }
})

module.exports = { registerUser, authUser }