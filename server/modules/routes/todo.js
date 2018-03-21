let express = require( 'express' );
let router = express.Router();
let items = [];

router.get( '/', ( req, res ) => {
    console.log( 'in todo GET' );
    res.send( { items: items } );
}); // end todo GET

router.post( '/', ( req, res ) => {
    console.log( 'in todo POST:', req.body );
    let newTask = {
        name: req.body.taskName,
        complete: false
    } // end newTask
    items.push( newTask );
    res.send( 'meow' );
}); // end todo POST

module.exports = router;