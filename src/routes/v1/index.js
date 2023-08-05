const express = require("express");

const UserController = require("../../controller/user-controller");
const { validateUserAuth } = require("../../middleware/auth-req-validators");

const router = express.Router();

router.post("/signup", validateUserAuth, UserController.create);
router.post("/signin", validateUserAuth, UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);

module.exports = router;
