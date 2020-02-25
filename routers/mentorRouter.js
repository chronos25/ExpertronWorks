const express       = require("express"),
     mentorsRouter  = express.Router(),
     mongoose       = require("mongoose"),
     mentor = require('../models/mentor'),
     bodyparser     = require("body-parser"),
     dbopr      = require("../controllers/operation");

const db = "expertron";

mentorsRouter.use(bodyparser.json());


mentorsRouter.route('/')
.get((req,res,next)=>{
    mentor.find({}).then((mentor)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(mentor);
    },(err)=>next(err))
    .catch((err)=>next(err));
});


mentorsRouter.route('/')
.post((req,res,next)=>{
    let mentors = new mentor({
        mentorId: req.body.mentorId,
        name: req.body.name,
        tasks: req.body.tasks
         
    });
    mentors.save(req.body).then((items)=>{
        console.log("received mentors details",items);
        res.status = 200;
        res.setHeader('Content-Type','application/json');
        res.json(items);        
    },(err)=>next(err))
    .catch((err)=>{
        console.log('Facing Error',err);
        next(err);
    })
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /mentors');
})
.delete((req, res, next) => {
    mentor.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

mentorsRouter.route('/:mentorId')
.get((req,res,next)=>{
    mentor.findOne({mentorId: req.params.mentorId}).then((mentor)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(mentor);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.put((req,res,next)=>{
    mentor.findOneAndUpdate({mentorId: req.params.mentorId},{$set:req.body},
    {
        new:true
    })
    .then((mentor)=>{
        res.statusCode =200;
        res.setHeader('Content-Type','application/json');
        res.json(mentor);
    },(err)=>next(err))
    .catch((err)=>next(err));
})

.delete((req,res,next)=>{
    mentor.deleteOne({mentorId: req.params.mentorId})
    .then((mentor)=>{
        res.statusCode = 200;
        res.setHeader('Content-type','application/json');
        let result = {
            ok:mentor.ok,
            n:mentor.n,
            msg:'deleted successfully'
        }
        res.json(result);
    })
})

module.exports = mentorsRouter;