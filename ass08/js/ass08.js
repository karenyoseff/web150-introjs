//select menu
$(function() {
  $("#speed").selectmenu();

  $("#files").selectmenu();

  $("#number")
  .selectmenu()
  .selectmenu("menuWidget")
  .addClass("overflow");

  $("#salutation").selectmenu();

  //Name and last name input
  //tooltip
  $(document).tooltip();

  //Birth date
  //Date picker
  $("#datepicker").datepicker();

  // English proficiency 
  //slider custom handler
  var handle = $( "#custom-handle" );
  $( "#slider" ).slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
  });
  //Button submit 
  //Dialog
  var progressTimer,
  progressbar = $( "#progressbar" ),
  progressLabel = $( ".progress-label" ),
  dialogButtons = [{
    text: "Cancel Submition",
    click: closeDownload
  }],
  dialog = $( "#dialog" ).dialog({
    autoOpen: false,
    closeOnEscape: false,
    resizable: false,
    buttons: dialogButtons,
    open: function() {
      progressTimer = setTimeout( progress, 2000 );
    },
    beforeClose: function() {
      submitButton.button( "option", {
        disabled: false,
        label: "Submit"
      });
    }
  });

  //progress bar
progressbar.progressbar({
  value: false,
  change: function() {
    progressLabel.text( "Current Progress: " + progressbar.progressbar( "value" ) + "%" );
  },
  complete: function() {
    progressLabel.text( "Complete!" );
    dialog.dialog( "option", "buttons", [{
      text: "Close",
      click: closeDownload
    }]);
    $(".ui-dialog button").last().trigger( "focus" );
  }
});

function progress() {
  var val = progressbar.progressbar( "value" ) || 0;

  progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );

  if ( val <= 99 ) {
    progressTimer = setTimeout( progress, 50 );
  }
}
//prompt submiting processbuttons
function closeDownload() {
  clearTimeout( progressTimer );
  dialog
    .dialog( "option", "buttons", dialogButtons )
    .dialog( "close" );
  progressbar.progressbar( "value", false );
  progressLabel
    .text( "Starting to submit..." );
  submitButton.trigger( "focus" );
}
// prompt submiting complete
var submitDialog;
submitDialog = $( "#dialog-confirm" ).dialog({
  autoOpen: false,
  resizable: false,
  height: "auto",
  width: 400,
  modal: true,
  buttons: {
    "Yes": function() {
      dialog.dialog( "open" );
      submitDialog.dialog( "close" );
    },
    Cancel: function() {
      submitDialog.dialog( "close" );
    }
  }
});

$(".submit button").button();
var submitButton = $(".submit button").click( function( event ) {
  submitDialog.dialog( "open" );
  event.preventDefault();
} );

});
