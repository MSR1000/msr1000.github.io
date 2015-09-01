
$( document ).ready(function() {

$(window).scroll(function() {
  var theta = ($(window).scrollTop() % Math.PI)/2;
  $('#left-gear').css({ transformOrigin: '50% 50% 0px', transform: 'rotate(' + theta + 'rad)' });
  $('#center-gear').css({ transformOrigin: '50% 50% 0px', transform: 'rotate(-' + theta + 'rad)' });
 $('#right-gear').css({ transformOrigin: '50% 50% 0px', transform: 'rotate(' + theta + 'rad)' });
});




});

