// JavaScript Document

var request =null;
var respuesta;
function getXMLHTTPRequest()
{
    var xRequest=null;

    if (window.XMLHttpRequest)
    {
        xRequest=new XMLHttpRequest();
    }
    else if (typeof ActiveXObject != "undefined")
    {
        xRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xRequest;
}

function ejecutarPeticion(url,parametros)
{

	
	request=getXMLHTTPRequest();
	
	//request.open("GET",url+'&parametro='+parametros+'',true);
		request.open("GET",url,true);
	request.onreadystatechange=manejador;
	
	request.send(null);
	
	
}


function cargarContenido(url)
{

			
		var str=this.id;
		
		
		
		try
		{
		efectoDespliegaAbajo();
			
			ejecutarPeticion(url,'');
		}
		catch(e)
		{
			alert('error '+e);
		}

}

function manejador()
{       var men;
        men=document.getElementById("principal");
        var nodo;
        var listRow;
		var root;
		men.innerHTML='';
	if(request.readyState==4)
	{ 
		if(request.status==200)
		{		
				
		
				respuesta=request.responseXML;
				
				cont=document.createTextNode(request.responseXML);
				
				
				//men.innerHTML='*-*'+request.responseText;
				men.innerHTML=''+request.responseText;
				
				
				//var parrafo = document.createElement("h2");
				
				//men.appendChild(request.responseXML);
				
                               
		}
		else
			alert("Error nro: "+request.status);
		
		
	}	
	
	
}



