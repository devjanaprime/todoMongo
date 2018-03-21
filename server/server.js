let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );
let todo = require( './modules/routes/todo.js' );

app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/todo', todo );

let port = process.env.PORT || 7765;

app.listen( port, () => {
    console.log( 'server up on:', port );
}); // end server up