console.log( 'JS' );

$( document ).ready( function(){
    getMessages();
});

function displayMessages( messages ){
    console.log( 'in displayMessages:', messages );
    let $el = $( '#messagesOut' );
    $el.empty();
    for( let i=0; i< messages.length; i++ ){
        $el.append( '<li>"' + messages[i].message + '" - ' + messages[i].from + '</li>')
    } // end for
}

function getMessages(){
    console.log( 'in getMessages' );
    $.ajax({
        method: 'GET',
        url: '/messages',
        success: function( response ){
            console.log( 'back from server with:', response );
            displayMessages( response );
        }
    });
} // end getMessages