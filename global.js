var nav = "<nav> <div class='scroller'>  </div> </nav>";
var main = "<main> <div class='scroller'> </div> </main>";
var menubutton = "<div class='menubtn'><div><span></span><span></span><span></span></div></div>";
var backgroundtoggle = "<div class='bgtoggle left' ttip='pls no moar'><span></span></div>";
var tooltipe = "<div class='tooltip'></div>";

var sitenav = "<a href='http://meme.cx/'>Home</a><header>Internal</header> <a href='http://meme.cx/themes/'>Themes</a> <!--<header>External</header> <a href='#'>lol</a> <header>Contact</header> <a href='#'>lol</a>-->";

function menubtn() {
  $(".menubtn").click(function() {
    $("nav").toggleClass("active");
    $(".menubtn").toggleClass("active");
  });
}
function bgtoggle() {
  $(".bgtoggle").click(function() {
    $("body").toggleClass("active");
    $(".bgtoggle").toggleClass("active");
  });
}
function tooltipero() {
$(".tip.left").hover(function(){
  var tooltp = $(this).attr("ttip");
  var showtip = $(".tooltip");
    $('.tooltip').html( tooltp );
    showtip.css({ 
        display: "block",
        left: ($(this).offset().left - $(".tooltip").width() - "24") + "px",
        top: $(this).offset().top + "px"
    });
},
function(){
    $(".tooltip").hide();   
    $('.tooltip').html("");
});
}
