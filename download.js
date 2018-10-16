    var express = require('express');
       var router = express.Router();
       var path= require('path');


       router.get('/upload',(req,res)=>{
        var file = __dirname+'/A2_free_time.mp3';
        res.download(file);
       })

       module.exports=router;