console.log('loaded');
//lsndfln

var img=document.getElementById('madi');
var marginleft=0;
function moveRight()
{
    marginleft=marginleft+1;
    img.style.marginLeft= marginleft + 'px';
}
img.onclick = function() {
    var interval=setInterval(moveRight,1);
};