const express = require("express");
const { PORT } = require("./config/serverConfig");

const app = express();

const getServerStarted = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
};

getServerStarted();
