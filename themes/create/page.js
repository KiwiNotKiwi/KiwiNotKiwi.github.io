var thememeta =
  '//META{"name":"straWberry","description":"straWberry?","author":"KixiOrKiwi","version":"1.1"}*//' +
  "\n" +
  "\n";

var themeimport =
  '@import url("https://rawgit.com/KiwiNotKiwi/files/master/themefiles/strawberry/strawberry.css");' +
  '\n' +
  '\n';

var defaultoptions = '/*Custom Colors*/' + '\n' +
    ':root {' + '\n' +
    '--first-color: #222222;' + '\n' +
    '--second-color: #222222;' + '\n' +
    '--third-color: #222222;' + '\n' +
    '--accent-color: #222222;' + '\n' +
     '}' + '\n';

var altnotifs = "@import url('https://rawgit.com/KiwiNotKiwi/Themes/master/Addons/strawberry/altnotifications.css');";

var centertyping = "@import url('https://rawgit.com/KiwiNotKiwi/Themes/master/Addons/strawberry/centertyping.css');";

var horizontalservers = "@import url('https://rawgit.com/KiwiNotKiwi/Themes/master/Addons/strawberry/horizontalservers.css');";

var squareicons = "@import url('https://rawgit.com/KiwiNotKiwi/Themes/master/Addons/strawberry/squareicons.css');";

var editnav = '<div class="editnav"><div class="button"></div><div class="inner"><header style="margin:5px;">Custom Options</header><span timport="'+altnotifs+'">Alt Notifications</span><span timport="'+centertyping+'">Centered Typing</span><span timport="'+horizontalservers+'">Horizontal Servers</span><span timport="'+squareicons+'">Square Icons</span></div></div>';

var texteditor = '<a download="strawberry.theme.css" id="downloadlink" style="display: none;transform:translate3d(0, 30px, 0) scale(0);"><span>Download</span></a> <button id="generate">Generate Theme</button> <textarea id="customcss" placeholder="Type custom CSS here"></textarea>';

var livepreview = '<div class="framewrap"><iframe id="livepreview" class="liveview" src="https://meme.cx/themes/discorddemo/discord.html?theme=https://raw.githubusercontent.com/KiwiNotKiwi/Themes/master/straWberry.theme.css" width="100%" height="100%" allowfullscreen="" frameborder="0"></iframe></div>';

var iframezoom = '<div class="zoomwrap"><span class="x">0</span><div class="slider"><div id="scale"></div></div>';

$(function() {
  $('#scale').slider({
    orientation: 'horizontal',
    range: 'min',  
    min: 0.1,
    max: 2,
    step: 0.1,
    value: 1,
    slide: refreshScale,
    change: refreshScale
  });
  
  function refreshScale() {
    var scale = $('#scale').slider('value'),
        x = $('.x');
    x.html(scale);
    $('.liveview').css('-webkit-transform', 'scale(' + scale + ')');
  }
});

function themecreate(){
  $(".editnav .button").click(function() {
    $(".editnav").toggleClass("active");
    $(".editnav .button").toggleClass("active");
  });

(function() {
  var textFile = null,
    makeTextFile = function(text) {
      var data = new Blob([thememeta, themeimport, text], { type: "text/css" });

      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
      }

      textFile = window.URL.createObjectURL(data);

      return textFile;
    };

  var create = document.getElementById("generate"),
    textbox = document.getElementById("customcss");

  create.addEventListener(
    "click",
    function() {
      var link = document.getElementById("downloadlink");
      link.href = makeTextFile(textbox.value);
      link.style.display = "inline-block";
      link.style.transform = "translate3d(0, 0, 0) scale(1)";
    },
    false
  );
})();
  
  $( "#generate" ).click(function() {
  $(this).text(function () {
    return $(this).text().replace("Generate Theme", "Update Theme"); 
});
});

$(".editnav span").click(function() {
  var txt = $.trim($(this).attr("timport"));
  var box = $("#customcss");
  box.val( txt + "\n" + "\n" + box.val() + "\n");
  
  //if($(box).val($(this).attr("timport"))) {
  //box.val( txt + "\n" + "\n" + box.val() + "\n");
  //box.val() + "\n" + "\n" + txt
  //}
});

}

