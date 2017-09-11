var express = require( 'express' );
//var bodyParser = require( 'body-parser' );
//var csrf = require( 'csurf' );
//var session = require( 'client-sessions' );

var port = process.env.PORT || 3000;

var app = express();

//app.set( 'view engine', 'jade' );
//app.use( bodyParser.urlencoded( { extended: true } ) );

app.get('/', function(req, res) 
{
	res.send('Working');
});

app.listen( port );
