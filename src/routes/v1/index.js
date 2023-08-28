const express = require("express");

const UserController = require("../../controller/user-controller");
const {
  validateUserAuth,
  validateIsAdminRequest,
} = require("../../middleware/auth-req-validators");

const router = express.Router();

router.post("/signup", validateUserAuth, UserController.create);
router.post("/signin", validateUserAuth, UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);
router.get("/isAdmin", validateIsAdminRequest, UserController.isAdmin);

module.exports = router;
