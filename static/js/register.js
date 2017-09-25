document.getElementById( 'submit-registration' ).addEventListener( 'click', (e) => {
	e.preventDefault();
	
	var email = document.getElementById( 'inputEmail' ).value;
	var displayname = document.getElementById( 'inputDisplayName' ).value;
	var pass = document.getElementById( 'inputPassword' ).value;
	
	var attributeList = [];
	
	var dataEmail = {
		Name : 'email',
		Value : email
	};
	
	var dataDisplayname = {
		Name : 'custom:DisplayName',
		Value : displayname
	};
	
	attributeList.push( dataEmail );
	attributeList.push( dataDisplayname );
	
	UserPool.signUp( email, pass, attributeList, null, function( err, res ) {
		if( err ) {
			alert( err );
			return;
		}
		
		cognitoUser = res.user;
		console.log( cognitoUser.getUsername() );
	});
})