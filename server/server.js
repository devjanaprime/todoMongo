let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );

app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

let port = process.env.PORT || 7765;

app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end server up