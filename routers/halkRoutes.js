const express=require('express');
const route=express.Router();

const halkController=require('../controller/halkController');

route.post('/oneri',halkController.postOneri);
route.post('/istek',halkController.postIstek);
route.post('/sikayet',halkController.postSikayet);


module.exports=route;