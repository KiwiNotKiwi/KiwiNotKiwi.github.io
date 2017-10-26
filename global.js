var menubtn =
  "<div class='menubtn'><span></span><span></span><span></span></div>";
var appearance =
  "<label class='appearance'> <input type='checkbox'> <span class='aptoggle'></span> <div class='imlazytoggle'>plz no moar</div> </label>";

var menu =
  "<div class='menu'> <div class='scroller'> <nheader>Internal</nheader> <nsection> <a href='#'>Docile Memes</a> <a href='http://meme.cx/themes/'>Themes</a> <a href='#'>UI Projects</a> </nsection> <nheader>External</nheader> <nsection> <a href='#'>Edgy Memes</a> </nsection> <nheader>Contact</nheader> <nsection> <a href='#'>Steam</a> <a href='#'>Discord</a> <a href='#'>Twitter</a> <a href='#'>Youtube</a> <a href='#'>Snapchat</a> </nsection> </div> </div>";
//Link list like blog menu
var main = "<div class='main'> <div class='scroller sexy'> </div> </div>";

function menubutton() {
  $(".menubtn").click(function() {
    $(".menubtn > span").toggleClass("active");
    $(".menu").toggleClass("active");
  });
}
function appearancetoggle() {
  $(".aptoggle").click(function() {
    $("body").toggleClass("bgtoggle");
  });
}
