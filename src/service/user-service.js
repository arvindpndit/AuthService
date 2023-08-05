const jwt = require("jsonwebtoken");

const UserRepository = require("../repository/user-repository");
const { JWT_SECRET } = require("../config/serverConfig");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw error;
    }
  }

  async createToken(data) {
    try {
      const token = jwt.sign(data, JWT_SECRET);
      return token;
    } catch (error) {
      console.log("something went wrong in the creation of token");
      throw error;
    }
  }

  async verifyToken(token) {
    try {
      const isVerified = jwt.verify(token, JWT_SECRET);
      return isVerified;
    } catch (error) {
      console.log("something went wrong in the verification of token");
      throw error;
    }
  }
}

module.exports = UserService;
