const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
//imprtacion a la bd
const db = require("./database")

//importacion de rutas
const UsersRoutes = require("./routes/users.routes")

//modulo express
const app = express()
app.use(cors())

//variable con el puerto
const port = 5000;

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}))

//routes
app.use("/users", UsersRoutes)

app.listen(port, () => console.log("Api corriendo correctamente"))