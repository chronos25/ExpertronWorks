const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task = new Schema({
        taskId:{
            type : String 
        },
        task:{
            type:String,
            require:true
        },
        assignDate:{
                type:Date,
                require:true
        },
        submitDate:
            {
                type:Date,
                require:true
        }
},{
    timestamps:true
});

const mentorSchema = new Schema({
    mentorId:{
        type : String,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required: true,
    },
    tasks:[task],
    },
    {
    timestamps:true
});

var mentorsSchema = mongoose.model('mentorsSchema',mentorSchema);

module.exports = mentorsSchema;