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

	if (tempX < 0){tempX = 0}
	if (tempY < 0){tempY = 0}

	var posX = tempX;
	document.getElementById("marco").style.left=  posX/5;
	document.getElementById("marco2").style.left= posX/10;
	document.getElementById("marco3").style.left= posX/15;
	
	return true
}