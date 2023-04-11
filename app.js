import express from 'express';
import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
const app = express();
app.use(express.json());
HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);
import mongoose from "mongoose";
// mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://172.31.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);