const express = require("express");

const app = express();

const getServerStarted = () => {
  app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
  });
};

getServerStarted();
