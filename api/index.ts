import express, { NextFunction, Response, Request } from "express";
import { sendEmail } from "./component/emailControler";

const app = express();
const port = 3001;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors = require("cors");
app.use(cors());

app.post("/api/sendEamil", sendEmail);
app.listen(port, () => {
  console.log(`Application started with port 3001`);
});
