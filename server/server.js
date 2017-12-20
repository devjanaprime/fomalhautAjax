const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const messages = require( './modules/messages' );
const app = express();
const port = 8172;

app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.listen( port, function(){
    console.log( 'server up on:', port );
});

app.get( '/messages', function( req, res ){
    console.log( '/messages get hit' );
    res.send( messages.allMessages() );
}); // end /messages get

app.post( '/messages', function( req, res ){
    console.log( '/messages POST hit:', req.body );
    messages.addMessage( req.body );
    res.sendStatus( 200 );
}); 