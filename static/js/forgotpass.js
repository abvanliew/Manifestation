document.getElementById( 'submit-forgotpass' ).addEventListener( 'click', (e) => {
	e.preventDefault();
	
	var uid = document.getElementById( 'inputUID' ).value;
	
	var UserData = {
		Username : uid,
		Pool : UserPool
	};
	
	var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser( UserData );
	
	cognitoUser.forgotPassword( {
		onSuccess: function( data ) {
			window.location.href = 'confirmpass';
		},
		onFailure: function( err ) {
			alert(err);
		}
	});
})