const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("./middlewares/cors")

const app = express();
const PORT = 3000;

const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");

app.use(
  cors,
  bodyParser.json(),
  mainRoute,
  gamesRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(PORT, () => {
  console.log(`Перейти на страницу http://localhost:${PORT}`);
});
