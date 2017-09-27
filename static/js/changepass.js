var cognitoUser = UserPool.getCurrentUser();

if( cognitoUser != null )
{
	cognitoUser.getSession( function( err, session ) {
		if( err )
		{
			alert( err );
			return;
		}
		
		document.getElementById( 'DisplayName' ).innerHTML = cognitoUser.getUsername();
	});
}

document.getElementById( 'submit-changepass' ).addEventListener( 'click', (e) => {
	e.preventDefault();
	
	var oldpass = document.getElementById( 'inputOldPassword' ).value;
	var newpass = document.getElementById( 'inputNewPassword' ).value;
	
	cognitoUser.changePassword( oldpass, newpass, function( err, res ) {
        if( err ) {
            alert( err );
            return;
        }
		
		window.location.href = 'dashboard';
    });
})