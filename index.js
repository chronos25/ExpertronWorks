const mongoose = require('mongoose')
 express = require('express'),
 assert = require('assert');

const url = 'mongodb://localhost:27017/expertron';

const options = {
    useNewUrlParser: true
}

const connect = mongoose.connect(url,options,(err,client)=>{
    assert.equal(null,err);
    console.log("Connected Successfully to DB");
});
 
var mentorRouter = require('./routers/mentorRouter')

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
app.use('/mentor',mentorRouter);


app.listen(3000,()=>{
 console.log("server is running at 3000");
 
})

