/*
Por Leonardo Ayala R.
*/


//recurso:
//http://www.webmasterlibre.com/2006/11/13/imagenes-aleatorias-con-javascript/

/*
	funcion que cambia aleatoriamente la imagen caragada en la pagina
*/

function getRandom(nums) 
{ 
    var ranNum= Math.round(Math.random()*nums); 
    return ranNum; 
} 



function randImage()
{
	var numberOfImages=5,categoriaImages=4; 
	var randomNumber;
	var contenedor1,contenedor2,contenedor3,contenedor4;
	var numA=3;
	var cadena="";
	
	var image = new Array(categoriaImages); 
	
	//for (i=0;i<document.images.length;i++)
        image[0]="imagenes/imgH";
		image[1]="imagenes/imgS"; 
	    image[2]="imagenes/imgR"; 
	    image[3]="imagenes/imgRP"; 
		
		for(i=0;i<image.length;i++)
		{
//			image[i]+randomNumber+".png";	
			randomNumber=getRandom(numberOfImages); 
			cadena=image[i]+randomNumber+".png";
			
			image[i]=cadena;
		}
		
		//alert(image.length);
	//Proceso de capturar el elemento que se va a setear la imagen:
	contenedor1=document.getElementById("imagenH");
	contenedor2=document.getElementById("imagenS");
	contenedor3=document.getElementById("imagenR");
	contenedor4=document.getElementById("imagenRP");
	
/*	for(i=0;i<image.length;i++)
		alert("imagen: "+ image[i]);*/
	//el contenedor de ley va a tener un img
	
	contenedor1.setAttribute("src",image[0]);
	contenedor2.setAttribute("src",image[1]);
	contenedor3.setAttribute("src",image[2]);
	contenedor4.setAttribute("src",image[3]);
	
}
