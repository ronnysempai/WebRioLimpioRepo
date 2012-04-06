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
	var numberOfImages=4,categoriaImages=4; 
	var randomNumber;
	var contenedor1,contenedor2,contenedor3,contenedor4;
	var numA=3;
	var cadena="";
	
	var image = new Array(categoriaImages); 
	
        image[0]="imagenes/imgH";
		image[1]="imagenes/imgS"; 
	    image[2]="imagenes/imgR"; 
	    image[3]="imagenes/imgRP"; 
		
		for(i=0;i<image.length;i++)
		{
			randomNumber=getRandom(numberOfImages); 
			cadena=image[i]+randomNumber+".png";
			
			image[i]=cadena;
		}
		
		//Proceso de capturar el elemento que se va a setear la imagen:
	contenedor1=document.getElementById("imagenH");
	contenedor2=document.getElementById("imagenS");
	contenedor3=document.getElementById("imagenR");
	contenedor4=document.getElementById("imagenRP");
	
	
	contenedor1.setAttribute("src",image[0]);
	contenedor2.setAttribute("src",image[1]);
	contenedor3.setAttribute("src",image[2]);
	contenedor4.setAttribute("src",image[3]);
	
}

function mostrarDetalle()
{
	var detalle;
	var descripcion;
	
	detalle = document.getElementById('detalles');
	descripcion = document.getElementById('descripcion');
	
	
	if(detalle.firstChild.nodeValue=="Mas detalles")
	{
		descripcion.style.visibility='visible';
		detalle.firstChild.nodeValue = "Ocultar detalles";
	}
	else
	{
		descripcion.style.visibility='hidden';
		detalle.firstChild.nodeValue = "Mas detalles";
	}
	
}

function cambiarFont(id)
{
	var fuente;
	var contenido;
	var fuente1;
	var fuente2;
	
	fuente = document.getElementById(id);
	contenido = document.getElementById('divContenido');
	
	if(fuente.firstChild.nodeValue=='Fuente1')
	{
		fuente.style.textDecoration='underline';
		contenido.style.fontFamily='Helvetica';
		fuente2=document.getElementById('fuente2');
		fuente2.style.textDecoration='none';
		
	}
	else
	{
		fuente.style.textDecoration='underline';
		contenido.style.fontFamily='Geneva';
		fuente1=document.getElementById('fuente1');
		fuente1.style.textDecoration='none';
	}
}


function cambiarBackground(idSombra,idTexto)
{
	var sombra;
	var parrafo;
	
	sombra = document.getElementById(idSombra);
	parrafo = document.getElementById(idTexto);
	
	if(sombra.firstChild.nodeValue=='Sombrear texto' &&  sombra.attributes.getNamedItem("id").nodeValue=='Sombrear1' )
	{
		sombra.firstChild.nodeValue='Quitar sombra';
		parrafo.style.backgroundColor='#256897';
		parrafo.style.color='#ffffff';
		
	}
	else if(sombra.firstChild.nodeValue=='Quitar sombra' &&  sombra.attributes.getNamedItem("id").nodeValue=='Sombrear1' )
	{
		sombra.firstChild.nodeValue='Sombrear texto';
		parrafo.style.backgroundColor='';
		parrafo.style.color='';
	}
	else if(sombra.firstChild.nodeValue=='Sombrear texto' &&  sombra.attributes.getNamedItem("id").nodeValue=='Sombrear2' )
	{
		sombra.firstChild.nodeValue='Quitar sombra';
		parrafo.style.backgroundColor='#256897';
		parrafo.style.color='#ffffff';
	}
	else if(sombra.firstChild.nodeValue=='Quitar sombra' &&  sombra.attributes.getNamedItem("id").nodeValue=='Sombrear2' )
	{
		sombra.firstChild.nodeValue='Sombrear texto';
		parrafo.style.backgroundColor='';
		parrafo.style.color='';
	}
	
}
