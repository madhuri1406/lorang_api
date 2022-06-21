const express = require("express");
const router = express.Router();
const fs = require('fs');
var appPath=__dirname

router.get("/",(req,res)=>{
  let data = fs.readdirSync(appPath)
  res.send({...data})
})
router.get("/test",require('./test'))

module.exports = router
