const expess = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

const router = expess.Router()



router.post("/register",registerUser);

router.post("/login",authUser);

module.exports = router