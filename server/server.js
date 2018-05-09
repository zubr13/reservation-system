import Express from "express";
import mongoose from "mongoose";
import serverConfig from "./config";
import stubs from "./models/stubs";
import reservations from "./models/reservation/reservation.routes";
import users from "./models/user/user.routes";
import universities from "./models/universities/universities.routes";
import lections from "./models/lections/lections.routes";
import compression from "compression";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";

const app = new Express();
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;

process.once("SIGUSR2", function() {
  process.kill(process.pid, "SIGUSR2");
});

mongoose.connect(serverConfig.mongoURL, error => {
  if (error) {
    console.error("Please make sure Mongodb is installed and running!");
    throw error;
  }

  stubs.generateReservations();
  stubs.generateUniversities();
});

if (process.env.NODE_ENV === "production") {
  app.use(Express.static("client/build"));
}

app.use(helmet());
app.use(compression());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));
app.use("/api", universities);
app.use("/api", lections);
app.use("/api", reservations);
app.use("/api", users);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
