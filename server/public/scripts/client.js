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
             if( task.complete ){
                outputString += ' completed';
             }
             outputString += '" data-id=' + task._id + '>' + task.name + '</li>';
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
        }).done( ( response ) => {
            if( verbose ) console.log( 'back from server with:', response );
            $( '#taskIn' ).val( '' );
            getTasks();
        }); // end ajax
    }); // end addTaskButton on click

    $( document ).on( 'click', '.taskItem', ( e ) =>{
        if( verbose ) console.log( 'task item clicked:', $( e.target ).data( 'id' ) );
        toggleCompletion( $( e.target ).data( 'id' ), $( e.target ).attr( 'class' ).includes( "completed" ) );
    }); //end taskItem on click

    // init
    getTasks();
} //end readyNow

let toggleCompletion = ( taskID, completed ) => {
    if( verbose ) console.log( 'in toggleCompletion for:', taskID, completed );
    $.ajax({
        type: 'PUT',
        url: '/todo',
        data: { id: taskID, complete: !completed }
    }).done( ( response ) =>{
        if( verbose ) console.log( 'back from PUT with:', response );
        getTasks();
    }) // end ajax
} // end toggleCompletedTask

$( document ).ready( readyNow );