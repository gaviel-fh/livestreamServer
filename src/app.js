//---------------------------------------
//--------------Imports------------------
//---------------------------------------

// extern
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//---------------------------------------
//--------------Setup--------------------
//---------------------------------------
const PORT = 8000;
const app = express()
app.use(bodyParser.json())
app.use(cors())

//---------------------------------------
//-----------------Routs-----------------
//---------------------------------------
app.get('/', (req, res) => {
    res.send({
        stream: 'Livestream von Kamera 1'
    })
})


app.listen(PORT, () => {
    console.log("Server is running on Port " + PORT);
})