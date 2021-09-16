const express = require("express");

const path = require("path")

const app = express()

const port = 8500

const Hours = require("./Hours")

app.use(Hours)

app.use(express.static(path.join(__dirname, 'public')))


app.listen(port, (err) => {
    if(err){
        throw err
    }else{
        console.log('Server is running')
    }
})