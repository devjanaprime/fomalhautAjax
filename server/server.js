const express = require( 'express' );
const messages = require( './modules/messages' );
const app = express();
const port = 8172;

app.use( express.static( 'server/public' ) );

app.listen( port, function(){
    console.log( 'server up on:', port );
});

app.get( '/messages', function( req, res ){
    console.log( '/messages get hit' );
    res.send( messages.allMessages() );
}); // end /messages get