const app  =  require("./controller/app")

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`App is currently listening in port ${port}`)
})