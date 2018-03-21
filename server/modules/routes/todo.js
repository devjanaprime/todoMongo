let express = require( 'express' );
let router = express.Router();
let items = [];

router.get( '/', ( req, res ) => {
    console.log( 'in todo GET' );
    res.send( { items: items } );
}); // end todo GET

router.post( '/', ( req, res ) => {
    console.log( 'in todo POST:', req.body );

    res.send( 'meow' );
}); // end todo POST

module.exports = router;