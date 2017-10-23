var defaultoptions = "/*Start Colors*/" + "\n" +
    ":root {" + "\n" +
    "yes" + "\n" +
    "no" + "\n" +
     "}" + "\n" +
     "/*End Colors*/";

     var thememeta =
  "//META{'name':'straWberry','description':'straWberry?','author':'KiwiNotKiwi','version':'k.y.s'}*//" +
  "\n" +
  "\n";

var themeimport =
  "@import url('https://rawgit.com/KiwiNotKiwi/files/master/themefiles/strawberry/strawberry.css');" +
  "\n" +
  "\n";

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
