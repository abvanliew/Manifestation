document.getElementById( 'submit-test' ).addEventListener( 'click', (e) => {
	e.preventDefault();
	
	var displayName = document.getElementById( 'inputDisplayName' ).value;
	
	$.post('/register', { DisplayName : displayName } , function( data ) {
		console.log( data );
	}, "json");
})