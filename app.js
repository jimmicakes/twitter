const express = require( 'express' );
const app = express();
const chalk = require('chalk');
const log = console.log;

app.use(function (req, res, next) {
  log(chalk.white(req.method, req.url));
  next();
});

app.listen(3000,() => {
	log(chalk.yellow('listening on port 3000'));
});

app.get('/', (req, res) => {
	res.send(`
    <html>
		<head>
			<title>Homepage</title>
		</head>
		<body>
			<h1>Welcome!</h1>
		</body>
    </html>
	`)
});
