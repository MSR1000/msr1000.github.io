
$( document ).ready(function() {

$(window).scroll(function() {
  var theta = ($(window).scrollTop() % Math.PI)/2;
  $('#left-gear').css({ transformOrigin: '174px 174px 0px', transform: 'rotate(' + theta + 'rad)' });
  $('#center-gear').css({ transformOrigin: '576.5px 174px 0px', transform: 'rotate(-' + theta + 'rad)' });
 $('#right-gear').css({ transformOrigin: '984px 174px 0px', transform: 'rotate(' + theta + 'rad)' });
});

});

