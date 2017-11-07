const express = require( 'express' );
const app = express();
const chalk = require('chalk');
const log = console.log;
const nunjucks = require('nunjucks');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
var locals = {
  title: 'Fantasy Characters',
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Hermione'}
  ]
};

app.use(function (req, res, next) {
  log(chalk.white(req.method, req.url));
  next();
});

app.listen(3000,() => {
  log(chalk.yellow('listening on port 3000'));
});

app.get('/', (req, res) => {
  res.render('index', locals);
});
