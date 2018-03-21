const verbose = true;

let readyNow = () => {
    if( verbose ) console.log( 'in readyNow' );
    $( document ).on( 'click', '#addTaskButton', () =>{
        let objectToSend = {
            taskName: $( '#taskIn' ).val()
        } // end objectToSend
        if( verbose ) console.log( 'sending:', objectToSend );
        $.ajax({
            type: 'POST',
            url: '/todo',
            data: objectToSend
        }).done( function( response ){
            if( verbose ) console.log( 'back from server with:', response );
            getTasks();
        }); // end ajax
    }); // end addTaskButton on click
} //end readyNow

let getTasks = () => {
    if( verbose ) console.log( 'in getTasks' )
    $.ajax({
        type: 'GET',
        url: '/todo'
    }).done( function( response ){
        if( verbose ) console.log( 'back from get call with:', response );
    }); // end ajax
} // end getTasks

$( document ).ready( readyNow );