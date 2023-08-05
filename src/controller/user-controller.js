const { use } = require("../routes/v1");
const UserService = require("../service/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      success: true,
      message: "Successfully created a new user",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "unable to create a new user",
      err: {},
    });
  }
};

const signIn = async (req, res) => {
  try {
    const user = await userService.signIn(req.body.email, req.body.password);
    return res.status(200).json({
      success: true,
      data: user,
      err: {},
      message: "Successfully signed in",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};

module.exports = {
  create,
  signIn,
};
