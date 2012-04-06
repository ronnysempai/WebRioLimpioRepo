var IE = document.all?true:false

if (!IE) document.captureEvents(Event.MOUSEMOVE)
	document.onmousemove = getMouseXY;

var tempX = 0
var tempY = 0

function getMouseXY(e) {
	if (IE) {
		tempX = event.clientX + document.body.scrollLeft
		tempY = event.clientY + document.body.scrollTop
	} else {
		tempX = e.pageX
		tempY = e.pageY
	}
//alert('abuaua');
	if (tempX < 0){tempX = 0}
	if (tempY < 0){tempY = 0}



	var posX = tempX;
	document.getElementById("nubes1").style.left=  posX/5+'px';
	//document.getElementById("nubes2").style.left= posX/10+'px';
	//document.getElementById("marco3").style.left= posX/15;
	
	return true
}