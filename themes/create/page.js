var livepreview = "<div class='framewrap'><iframe id='livepreview' class='liveview' src='https://betterdocs.net/themes/assets/darkdiscord.html?theme=https://raw.githubusercontent.com/0mniscient/Discord-Themes/master/Themes/Quiet.theme.css' width='100%' height='100%' allowfullscreen='' frameborder='0'></iframe></div>";

var iframezoom = "<div class='zoomwrap'><span class='x'>0</span><div class='slider'><div id='scale'></div></div>";

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
