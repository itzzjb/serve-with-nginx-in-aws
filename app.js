const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hi Everybody! I am served from nginx from EC2 instance in AWS cloud. - Januda Bethmin"
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
