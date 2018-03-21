let express = require( 'express' );
let todo = require( '../db/todo.js' );
let router = express.Router();

router.get( '/', ( req, res ) => {
    console.log( 'in todo GET' );
    todo.find().then( function( response ){
        res.send( { items: response } );
      }); // end find
}); // end todo GET

router.post( '/', ( req, res ) => {
    console.log( 'in todo POST:', req.body );
    let newTask = {
        name: req.body.taskName,
        complete: false
    } // end newTask
    var newRecord = todo( newTask );
    newRecord.save();
    res.send( 'meow' );
}); // end todo POST

router.put( '/', ( req, res ) => {
    console.log( 'in todo PUT:', req.body );
    todo.find( { "_id" : req.body.id }, ( err, item ) => {
        if( err ) {
            console.log( 'error prior to updating:', err );
            res.send( 400 );
        } //end error finding
        else{
            item = item[0];
            item.complete = req.body.complete
            item.save( (err) => {
                if( err ){
                    console.error( 'error after update:', err );
                    res.send( 400 );
                } // end error saving
                else{
                    res.send( 200 );
                } // end no error with update/save
            }); //end save
        } // end no error with find
    }); //end update
}); //end todo PUT
module.exports = router;