//Require module
const express = require("express");
const bodyParser = require("body-parser");

const okta = require("@okta/okta-sdk-nodejs");
// Express Initialize
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 8000;

app.listen(port, () => {
  console.log("listen port 8000");
});
//create api
app.post("/user", async (req, res) => {
  const client = new okta.Client({
    orgUrl: "https://dev-06921051.okta.com/",
    token: "your api key", // Obtained from Developer Dashboard
  });
  const response = await client.createUser(req.body);
  res.send(response);
});
