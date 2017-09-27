document.getElementById( 'submit-login' ).addEventListener( 'click', (e) => {
	e.preventDefault();
	
	var uid = document.getElementById( 'inputUID' ).value;
	var pass = document.getElementById( 'inputPassword' ).value;
	
	
	var AuthData = {
			Username : uid,
			Password : pass
	};

	var AuthDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails( AuthData );

	var UserData = {
		Username : uid,
		Pool : UserPool
	};
	
	var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser( UserData );
	
	cognitoUser.authenticateUser( AuthDetails, {
		onSuccess: function( res ) {
			window.location.href = '\dashboard';
		},

		onFailure: function( err ) {
			alert( err );
		},

	});
})