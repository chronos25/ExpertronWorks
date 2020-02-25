const assert = require('assert');
const mongodb = require('mongodb')

exports.insertDocument = (db,document,collection,callback)=>{
    const coll = db.collection(collection);
    return coll.insert(document);
}

exports.deleteDocument = (db,document,collection,callback)=>{
    const coll = db.collection(collection);
    return coll.deleteOne(document);
}

exports.findDocument = (db,collection,callback)=>{
    const coll = db.collection(collection);
    return coll.find({}).toArray();
}

exports.updateDocument = (db,document,update,collection,callback)=>{
    const coll = db.collection(collection);
    return coll.updateOne(document,{$set:update},null);
}