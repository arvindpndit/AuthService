const express = require("express");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

//const db = require("./models/index");

const app = express();

const getServerStarted = () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    //db.sequelize.sync({ alter: true });
    console.log(`Server is running on PORT ${PORT}`);
  });
};

getServerStarted();
