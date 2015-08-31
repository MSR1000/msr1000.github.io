console.log('Script started');

window.onload = function(){
 console.log('Window loaded');
 var cvs = document.getElementById("game-screen");
 var ctx = cvs.getContext('2d');

ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI);
ctx.strokeStyle="#FFFFFF";


}