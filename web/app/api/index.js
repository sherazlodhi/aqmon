import express from 'express';


const router = express.Router();
import {MongoClient} from 'mongodb';
import assert from 'assert';

import config from '../config';
let db;

MongoClient.connect(config.mongodbUri, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
  assert.equal(null, err);
  db = client.db(config.dbname);

});


router.get('/ExportPMData.json',(req,res)=>{
  db.collection(config.collection).find({})
    .sort({
      epoch_timestamp:1
    }).toArray(function(err,result){
      if(err) throw err;
    // console.log(result);
     
      res.send(result);
      
    });
});

router.get('/GetPMData',(req,res)=>{
  let start = parseInt(req.query.start);
  let end = parseInt(req.query.end);

  db.collection(config.collection).find({
    epoch_timestamp: {
      $gt: start,
      $lt: end
  }})
    .sort({
      epoch_timestamp:1
    }).toArray(function(err,result){
      if(err) throw err;
    //  console.log(result);
      res.send(result);
    });
});


export default router;
