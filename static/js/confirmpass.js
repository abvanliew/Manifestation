document.getElementById( 'submit-changepass' ).addEventListener( 'click', (e) => {
	e.preventDefault();
	
	var uid = document.getElementById( 'inputUID' ).value;
	var code = document.getElementById( 'inputCode' ).value;
	var newpass = document.getElementById( 'inputNewPassword' ).value;
	
	var UserData = {
		Username : uid,
		Pool : UserPool
	};
	
	var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser( UserData );
	
	cognitoUser.confirmPassword( code, newpass, {
		onSuccess: function( data ) {
			window.location.href = 'dashboard';
		},
		onFailure: function( err ) {
			alert(err);
		}
	});
})