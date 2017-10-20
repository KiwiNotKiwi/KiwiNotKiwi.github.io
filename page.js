$( ".menubtn" ).click(function() {
  $( ".menubtn > span" ).toggleClass( "active" );
  $( ".menu" ).toggleClass( "active" );
});

$( ".aptoggle" ).click(function() {
  $( "body" ).toggleClass( "bgtoggle" );
});
