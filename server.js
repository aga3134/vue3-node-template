const express = require("express");
const Config = require("./config");
const ViewRoute = require("./app/route/viewRoute.js");

const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname);
app.port = Config.serverPort;
app.host = "0.0.0.0";
app.use("/static",express.static(__dirname + "/static"));

app.use("/", ViewRoute);

app.listen(app.port, app.host);
console.log("Server started");