var cognitoUser = UserPool.getCurrentUser();

if( cognitoUser != null )
{
	cognitoUser.getSession( function( err, session ) {
		if( err )
		{
			alert( err );
			return;
		}
		console.log('session validity: ' + session.isValid());
		
		cognitoUser.getUserAttributes( function( err, attrib ) {
			if( err ) {
				alert( err );
				return;
			} else {
				document.getElementById( 'DisplayName' ).innerHTML = cognitoUser.getUsername();
				for (i = 0; i < attrib.length; i++) {
					console.log('attribute ' + attrib[i].getName() + ' has value ' + attrib[i].getValue());
					switch( attrib[i].getName() ) {
						case 'email':
							document.getElementById( 'DisplayEmail' ).innerHTML = attrib[i].getValue();
							break;
					}
				}
			}
		});
	});
}