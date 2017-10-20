var menubtn = "<div class='menubtn'><span></span><span></span><span></span></div>"

var appearance = "<label class='appearance'> <input type='checkbox'> <span class='aptoggle'></span> <div class='imlazytoggle'>Disable the background</div> </label>"

var menu = "<div class='menu'> <div class='scroller'> <nheader>Internal</nheader> <nsection> <a href='#'>Docile Memes</a> <a href='#'>Themes</a> <a href='#'>UI Projects</a> </nsection> <nheader>External</nheader> <nsection> <a href='#'>Edgy Memes</a> </nsection> <nheader>Contact</nheader> <nsection> <a href='#'>Steam</a> <a href='#'>Discord</a> <a href='#'>Twitter</a> <a href='#'>Youtube</a> <a href='#'>Snapchat</a> </nsection> </div> </div>"
var main = "<div class='main'> <div class='scroller sexy'> </div> </div>"

var blogentry = "<bentry> <bheader> <btitle>owo owo owo owo owo owo owo owo owo owo owo owo owo owo owo owo </btitle> <btimestamp> <bdate>10.19.2017</bdate> <btime>8:40am (PST)</btime> </btimestamp> </bheader> <bbody> <bp>This site is mainly idek. I guess to shove update information and also my random ass projects onto. You can mostly ignore everything here as it probably wont help you with anything.</bp> <bp>But If you want to see cancer then by all means stay as everything I do is absolute shit. Enjoy.</bp> </bbody> </bentry>" + 
    "<bentry> <bheader> <btitle>owo owo owo owo owo owo owo owo owo owo owo owo owo owo owo owo </btitle> <btimestamp> <bdate>10.20.2017</bdate> <btime>10:19am (PST)</btime> </btimestamp> </bheader> <bbody> <bp>This site is mainly idek. I guess to shove update information and also my random ass projects onto. You can mostly ignore everything here as it probably wont help you with anything.</bp> <bp>But If you want to see cancer then by all means stay as everything I do is absolute shit. Enjoy.</bp> </bbody> </bentry>"



$(function() {
  $( "#page" ).prepend( menubtn + menu );
  $( "#page" ).append( main + appearance );
  $( ".sexy" ).prepend( blogentry );
  return required();
});

function required(){
$( ".menubtn" ).click(function() {
  $( ".menubtn > span" ).toggleClass( "active" );
  $( ".menu" ).toggleClass( "active" );
});
$( ".aptoggle" ).click(function() {
  $( "body" ).toggleClass( "bgtoggle" );
});
}
