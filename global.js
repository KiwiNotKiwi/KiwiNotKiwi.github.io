var nav = "<nav> <div class='scroller'>  </div> </nav>";
var main = "<main> <div class='scroller'> </div> </main>";
var menubutton = "<div class='menubtn'><div><span></span><span></span><span></span></div></div>";
var backgroundtoggle = "<label class='bgtoggle tip left' ttip='pls no moar'> <input type='checkbox'><span></span></label>";
var tooltipe = "<div class='tooltip'></div>";

var sitenav = "<header>Internal</header> <a href='./themes/'>Themes</a> <!--<header>External</header> <a href='#'>lol</a> <header>Contact</header> <a href='#'>lol</a>-->";

function menubtn() {
  $(".menubtn").click(function() {
    $("nav").toggleClass("active");
    $(".menubtn").toggleClass("active");
  });
}
function bgtoggle() {
  $(".bgtoggle span").click(function() {
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
