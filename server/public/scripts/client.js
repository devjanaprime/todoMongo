const verbose = true;

let getTasks = () => {
    if( verbose ) console.log( 'in getTasks' )
    $.ajax({
        type: 'GET',
        url: '/todo'
    }).done( function( response ){
        if( verbose ) console.log( 'back from get call with:', response );
        let outputElement = $( '#outputList' );
        outputElement.empty();
        for( task of response.items ){
             let outputString = '<li class="taskItem';
             if( task.completed ){
                outputString += ' completed';
             }
             outputString += '" data-id=' + task.name + '>' + task.name + '</li>';
             outputElement.append( outputString );
        } // end for
    }); // end ajax
} // end getTasks

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
            $( '#taskIn' ).val( '' );
            getTasks();
        }); // end ajax
    }); // end addTaskButton on click

    $( document ).on( 'click', '.taskItem', ( e ) =>{
        console.log( 'task item clicked:', $( e.target ).data( 'id' ) );
    }); //end taskItem on click

    // init
    getTasks();
} //end readyNow

$( document ).ready( readyNow );