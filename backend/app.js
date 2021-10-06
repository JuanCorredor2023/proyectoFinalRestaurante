const express = require('express');
const cors = require('cors')
const morgan = require("morgan")

const contacRoutes =require("./router/contact.routes")
const authRoutes =require("./router/user.routes")

const app = express()

const db = require('./database')

const port = (process.env.PORT || 5000)

//Midlewares
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())

//routes
app.use('/contact',contacRoutes)
app.use('/auth',authRoutes)

app.listen(port, () => console.log("App conectada correctamente en el puerto", port))