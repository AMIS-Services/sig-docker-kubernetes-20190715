const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8080;

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
  });
  
  router.get('/', function(req,res){
    res.sendFile(path + 'index.html');
  });

  router.get('/healthz', function(req,res){
    if (Math.random() < 0.7)
      res.send('I am doing fine!')
    else {
      res.status(404); 
      res.send('A bit under the weather');
    }
  });
  router.get('/readie', function(req,res){
    if (Math.random() < 0.4)
      res.send('I am most definitely ready!')
    else {
      res.status(400); 
      res.send('None shall pass');
    }
  });


  router.get('/sharks', function(req,res){
    res.sendFile(path + 'sharks.html');
  });

  app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Sharks application v2 - with Health Probes - listening on port 8080!')
})