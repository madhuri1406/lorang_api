//require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const appPath = __dirname
const fs = require('fs')
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api


// api routes
//
app.get('/',(req,res)=>{
// res.sendFile(path.join(__dirname, '/index.html'));
  let data = fs.readdirSync(appPath)
  res.send({...data})
  // .map(fileName => {
  //   console.log(fileName);
  //   req.send()
  //   // return fileName
  //   // console.log(appPath.join(appPath, fileName));
  // });
}


)
app.use('/routes', require('./routes'));
// global error handler
//app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
    console.log("check with http://localhost:4000");
});
