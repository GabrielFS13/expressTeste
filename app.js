const express = require('express')
const app = express()
const port = 6035


app.get('/', (req, res) =>{
    res.send("Hello World")
})


app.get("/Nome", (req, res) =>{
    res.send("Um nome ae")
})

app.listen(port, () =>{
    console.log("Server listen on 6035")
})