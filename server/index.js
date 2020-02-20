const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, "../dist");
app.use(express.static(DIST_DIR));

const mockResponse = {
  foo: "bar",
  bar: "foo"
};
app.get("/api", (req, res) => {
  res.send(mockResponse);
});
app.listen(port, function() {
  console.log("App listening on port: " + port);
});
