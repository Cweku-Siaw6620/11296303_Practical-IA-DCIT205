const express = require('express');
const { connect } = require('mongoose');
const app = express();

app.listen(3000, () =>{
    console.log('Node API app is running')
})

mongoose.connect("mongodb+srv://kelvinashong:Kelly@shong6620@cluster0.wo6fprr.mongodb.net/")
.then(() =>{
    console.log('connected to mongodb')
})