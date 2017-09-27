var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var path = require( 'path' );
var AmazonCognitoIdentity = require( 'amazon-cognito-identity-js' );

var port = process.env.PORT || 3000;

var app = express();

app.set( 'view engine', 'jade' );
app.locals.pretty = true;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/css', express.static( __dirname + '/static/css') );
app.use( '/js', express.static( __dirname + '/static/js') );

/*
var poolData = { 
	UserPoolId : 'us-east-1_qDlRDAqit',
	ClientId : '69qjjs5euih1kok6cdjvru1r6o'
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool( poolData );
*/

app.get( '/', function( req, res )
{
	res.render( 'index.jade' );
});

app.get( '/login', function( req, res )
{
	res.render( 'login.jade' );
});

app.get( '/forgotpass', function( req, res )
{
	res.render( 'forgotpass.jade' );
});

app.get( '/confirmpass', function( req, res )
{
	res.render( 'confirmpass.jade' );
});

app.get( '/register', function( req, res )
{
	res.render( 'register.jade' );
});

/*
app.post( '/register', function( req, res )
{
	res.json( req.body );
	
	//var dataUsername = {
	//	Name : 'custom:DisplayName',
	//	Value : body.req.userName
    	//};
	
	//var attribUsername = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataUsername);
	//attributeList.push(attribUsername);
	
	//userPool.signUp( req.body.email, req.body.password, attributeList, null, function(err, result) {
	//	if (err) {
	//	    alert(err);
	//	    return;
	//	}
	//	cognitoUser = result.user;
		//console.log( 'user name is ' + cognitoUser.getUsername() );
		//res.send( cognitoUser.getUsername() );
    //	});
});
*/

app.get( '/dashboard', function( req, res )
{
	res.render( 'dashboard.jade' );
});

app.get( '/changepass', function( req, res )
{
	res.render( 'changepass.jade' );
});

/*
app.get( '/test', function( req, res )
{
	res.render( 'test.jade' );
});
*/

app.listen( port );