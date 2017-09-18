var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var AWS = require( 'aws-sdk' );
var AWSCognito = require( 'amazon-cognito-identity-js' );

var port = process.env.PORT || 3000;

//var AWS_REGION = process.env.AWS_REGION;
//var AWS_ACCOUNT_ID = process.env.AWS_ACCOUNT_ID;
//var COGNITO_IDENTITY_POOL_ID = process.env.COGNITO_IDENTITY_POOL_ID;
//var IAM_ROLE_ARN = process.env.IAM_ROLE_ARN;
//var COGNITO_DATASET_NAME = process.env.COGNITO_DATASET_NAME;
//var COGNITO_KEY_NAME = process.env.COGNITO_KEY_NAME;
//var CALLBACKURL = process.env.CALLBACKURL;
var AMAZON_CLIENT_ID = process.env.AMAZON_CLIENT_ID;
//var AMAZON_CLIENT_SECRET = process.env.AMAZON_CLIENT_SECRET;

var app = express();

app.set( 'view engine', 'jade' );
app.use( bodyParser.urlencoded( { extended: true } ) );

var poolData = { UserPoolId : 'us-east-1_3DkLrpysP', ClientId : AMAZON_CLIENT_ID };
var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool( poolData );
var attributeList = [];

app.get( '/', function( req, res )
{
	res.render( 'index.jade' );
});

app.get( '/login', function( req, res )
{
	res.render( 'login.jade' );
});

app.get( '/register', function( req, res )
{
	res.render( 'register.jade' );
});

app.post( '/register', function( req, res )
{
	res.json( req.body );
	
	//var dataUsername = {
	//	Name : 'UserName',
	//	Value : body.req.userName
    	//};
	
	//var attribUsername = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataUsername);
	//attributeList.push(attribUsername);
	
	//userPool.signUp( req.body.email, req.body.password, attributeList, null, function(err, result) {
        //if (err) {
        //    alert(err);
        //    return;
        //}
        //cognitoUser = result.user;
        //console.log( 'user name is ' + cognitoUser.getUsername() );
	//res.send( cognitoUser.getUsername() );
    	//});
});

app.get( '/dashboard', function( req, res )
{
	res.render( 'dashboard.jade' );
});

app.listen( port );
