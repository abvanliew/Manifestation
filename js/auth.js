var poolData = { 
	UserPoolId : 'us-east-1_3DkLrpysP',
	ClientId : '3islbbi8261u5mpvnkf4d4gifk'
};

var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool( poolData );
var attributeList = [];