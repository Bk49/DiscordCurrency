const express = require('express')
const app = express()
app.use(express.static("public"))

const userRoute = require('./routes/user')

app.use('/user', userRoute)

app.get('/', (req, res)=>{
    res.status(200).send("Hello World")
})

module.exports = app