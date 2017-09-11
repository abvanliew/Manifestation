var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var AWS = require('aws-sdk');
var AWSCognito = require('amazon-cognito-identity-js');

var port = process.env.PORT || 3000;

var app = express();

app.set( 'view engine', 'jade' );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.get( '/', function(req, res) 
{
	res.render( 'index.jade' );
});

app.get( '/login', function(req, res) 
{
	res.render( 'login.jade' );
});

app.get( '/register', function(req, res) 
{
	res.render( 'register.jade' );
});

app.get( '/dashboard', function(req, res) 
{
	res.render( 'dashboard.jade' );
});

app.listen( port );