
    var express = require('express');
    var app = express(); 
    var http = require('http').Server(app).listen(3001);
    var upload = require('express-fileupload');
    var fs = require('fs');
    var path = require('path');

    
     app.use(upload());
  
     
        app.get("/",(req,res) =>{
            res.status(200);
            res.sendFile(path.join(__dirname,'Upload and preview.html'));
        })

       app.post("/",(req,res)=>{     
            var file = req.files.filename;// ???
            filename = file.name;//?????
            file.mv("./upload/"+filename);
            console.log(req.files);
            app.get('/download', function(req, res){
                var filelocation = path.join(__dirname+'/upload/'+filename);
                res.download(filelocation,filename); // Set disposition and send it.
              });
       })
       

    //    app.get('/download', function(req, res){
    //     var filename = req.params.file;
    //     var filelocation = path.join(__dirname+'/upload/');
    //     res.download(filelocation,filename); // Set disposition and send it.
    //   });

       



     
   
    