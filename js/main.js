
$( document ).ready(function() {

$(window).scroll(function() {
  var theta = ($(window).scrollTop() % Math.PI)/5;
  $('#left-gear').css({ transformOrigin: '50% 50%', transform: 'rotate(' + theta + 'rad)' });
  $('#center-gear').css({ transformOrigin: '50% 50%', transform: 'rotate(-' + theta + 'rad)' });
 $('#right-gear').css({ transformOrigin: '50% 50%', transform: 'rotate(' + theta + 'rad)' });
});




});

