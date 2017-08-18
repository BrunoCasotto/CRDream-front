require('module-alias/register');

const express = require('express');

const path = require('path');

const dust = require('express-dustjs')

const app = express();

dust._.helpers = require('@helpers/dustHelpers')
console.log(dust._.helpers)
app.use("/", require("@src/routes.js"))

app.use(express.static('public'));

app.engine('dust', dust.engine({
  useHelpers: true
}))

app.set('view engine', 'dust')

app.set('views', path.resolve(__dirname, './views'))

app.listen( process.env.PORT || 8080, function() {
  console.log('Server running on 8080');
});