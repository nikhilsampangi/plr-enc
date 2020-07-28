const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");

//routes
router.get("/test", testFunction);

function testFunction(req, res) {
  var process = spawn("py", ["./python/test.py", req.query.test]);
  process.stdout.on("data", (data) => {
    console.log(`data:${data}`);
    res.send(data.toString());
  });
  process.stderr.on("data", (data) => {
    console.log(`error:${data}`);
    res.status(400).send("spawn error: ", data);
  });
}

module.exports = router;
