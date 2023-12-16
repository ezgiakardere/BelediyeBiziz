const halkSikayet=require('../models/halkSikayet');
const halkIstek=require("../models/halkIstek");
const halkOneri=require("../models/halkOneri");


exports.postSikayet=async(req,res)=>{
    const {sikayet}=req.body
    const sikaye=await halkSikayet.create({sikayet})
    res.status(200).json(sikaye)
}


exports.postIstek=async(req,res)=>{
    const {istek}=req.body
    const iste=await halkIstek.create({istek})
    res.status(200).json(iste)
}

exports.postOneri=async(req,res)=>{
    const {oneri}=req.body
    const oner=await halkOneri.create({oneri})
    res.status(200).json(oner)
}