var themelist = "<section><header>Up to Date V2</header><article><img src='https://rawgit.com/KiwiNotKiwi/files/master/themefiles/website/demopic.png' width='330' height='auto' /></article><footer><span>straWberry</span><span>super strawberry lanA</span><span>#fruit #cool #yay</span></footer><a href='https://raw.githubusercontent.com/KiwiNotKiwi/Themes/master/straWberry.theme.css' download></a></section>";

var bghoverer = "<div class='backghover'></div>";

function bghover(){
  var atri = $("main section img").attr("src");
  $('.backghover').css("background-image", "url('" + atri + "')")
$('main section').hover(
  function(){
    $(".backghover").css("opacity","0.9");
  },
  function(){
    $(".backghover").css("opacity", "0");
  }
);
}
