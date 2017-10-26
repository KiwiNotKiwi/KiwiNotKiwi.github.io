var createmenu = "<div class='menu'> <div class='scroller'>  </nsection> <nheader>Functionality</nheader> <nsection>  <label class='themebutton'> <input type='button' id='addto'><span>Horizontal Servers</span><span class='run'>@import url('https://rawgit.com/KiwiNotKiwi/Themes/master/Addons/strawberry/horizontalservers.css');</span></label> <label class='themebutton'> <input type='button' id='addto'><span>Square Icons</span><span class='run'>@import url('https://rawgit.com/KiwiNotKiwi/Themes/master/Addons/strawberry/squareicons.css');</span></label> <div class='optiondivider'> <label class='themebutton'> <input type='button' id='addto'><span>Centered Typing</span><span class='run'>@import url('https://rawgit.com/KiwiNotKiwi/Themes/master/Addons/strawberry/centertyping.css');</span></label> <label class='themebutton'> <input type='button' id='addto'><span>Bottom Typing</span><span class='run'>@import url('https://rawgit.com/KiwiNotKiwi/Themes/master/Addons/strawberry/bottomtyping.css');</span></label> </div> </nsection>  </div> </div> <div class='themecreator'> <a download='strawberry.theme.css' id='downloadlink' style='display: none;transform:translate3d(0, 30px, 0) scale(0);'><span>Download</span></a> <button id='generate'>Generate Theme</button> <textarea id='customcss' placeholder='Type custom CSS here'></textarea> </div>";

var thememeta =
  "//META{'name':'straWberry','description':'straWberry?','author':'KiwiOrKixi','version':'1.1.1'}*//" + "\n" + "\n";

var themeimport =
  "@import url('https://rawgit.com/KiwiNotKiwi/files/master/themefiles/strawberry/strawberry.css');" + "\n" + "\n";

var defaultoptions = "/*Color Options*/" + "\n" + ":root {" + "\n" +
    "--first-color: #222222;" + "\n" +
    "--second-color: #222222;" + "\n" +
    "--third-color: #222222;" + "\n" +
    "--accent-color: #222222;" + "\n" +
     "}" + "\n";

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

$(function() {
  $('#customcss').append( defaultoptions );
});

$( "#generate" ).click(function() {
  $(this).text(function () {
    return $(this).text().replace("Generate Theme", "Update Theme"); 
});
});

  $(".themebutton .run").click(function(){
    var txt = $.trim($(this).text());
    var box = $("#customcss");
    box.val( txt + "\n" + "\n" + box.val() + "\n");
  });
