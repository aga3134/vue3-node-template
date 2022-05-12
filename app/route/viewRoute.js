const express = require("express");
const router = express.Router();
const Config = require("../../config.json");

const meta = {};
meta.mode = Config.mode;
meta.version = Config.version;
meta.hostname = Config.hostname;

router.get("/", function(req, res) {
  meta.title = "vue3-node-template";
  meta.path = req.originalUrl;
  meta.desc = Config.desc;
  res.render("view/index.ejs",{meta: meta});
});


module.exports = router;