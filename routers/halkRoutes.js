const express=require('express');
const route=express.Router();

const halkController=require('../controller/halkController');


route.post('/oneri',halkController.postOneri);
route.post('/istek',halkController.postIstek);
route.post('/sikayet',halkController.postSikayet);
route.get("/oneriler",halkController.getOneri);
route.get("/istekler",halkController.getIstek);
route.get("/sikayetler",halkController.getSikayet);
module.exports=route;