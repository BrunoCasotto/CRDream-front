var express = require('express');
require('module-alias/register');

var app = express();
app.use("/", require("@src/routes.js"))

app.listen(8080, function() {
  console.log('Server running on 8080');
});