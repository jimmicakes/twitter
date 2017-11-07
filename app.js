const express = require( 'express' );
const app = express();

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.listen(3000,() => {
	console.log('listening on port 3000');
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