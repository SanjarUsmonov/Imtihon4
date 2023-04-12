const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

const routes = require("./routes")

app.use(express.json());

app.use("/", routes)

app.listen(PORT, () => {
  console.log(PORT);
});
