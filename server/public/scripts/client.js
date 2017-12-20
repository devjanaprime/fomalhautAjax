console.log( 'JS' );

class Message{
    constructor( from, message ){
        this.from = from;
        this.message = message;
    } // end constructor
} // end Message class

$( document ).ready( function(){
    getMessages();

    $( '#addMessageButton' ).on( 'click', function(){
        console.log( 'in addMessageButton on click' );
        // get user input
        // create an object with input
        let objectToSend = new Message( $( '#fromIn' ).val(), $( '#messageIn' ).val() );
        console.log( 'sending:', objectToSend );
        // make a POST call via AJAX
        $.ajax({
            method: 'POST',
            url: '/messages',
            data: objectToSend,
            success: function( response ){
                console.log( 'back from POST with:', response );
                // call getMessages to update DOM
                getMessages();
            }
        }); //end ajax
    }); //end addMessageButton on click
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