import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ origin: true }));

app.use(routes);

app.listen(5000, () => console.log("server listening on port 5000"));

export default app;
