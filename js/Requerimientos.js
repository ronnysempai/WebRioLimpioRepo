// JavaScript Document


//referencia: clase de DAW



function enviarReq(categoria,sub_categoria){
	
    var request;
    if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
				
     } 
      else if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
    }
	request.open('GET','xml/productos.xml',true);
    request.onreadystatechange= function ()
    {
        manejador(request,categoria,sub_categoria);
    }
    request.send(null);

 }


function manejador(request,categoria,sub_categoria)
{
    if (request.readyState==4)
       { 
	   	
           //if(request.status==200)
            //{
                var resp=request.responseXML;
				
				PresentarProductos(resp,categoria,sub_categoria);
    }
 } 
 
 
 function PresentarProductos(resp,categoria,sub_categoria)
{
	 var coleccion,category,sub_category;
	 var tam_colecc=0,t_efectiv_colecc=0,tam_category=0,tam_sub_category=0;
	 var arreglo;
	 var marca,modelo,descrip,precio,imagen;
	 var i,k,n; //varibles contadores
	 
	 
	 RemoverComponentes();
	 
	
	 //se recibe la respuesta y se carga una coleccion
	 coleccion=resp.getElementsByTagName("productos");
	 //tam_colecc = resp.getElementsByTagName("productos")[0].childNodes.length;
	 tam_colecc = coleccion[0].childNodes.length;
		 
	
		  
	for(i=0;i<tam_colecc;i++)
	{
		
		
		try{
		//capturo la categoria
			category=coleccion[0].getElementsByTagName('categoria')[i].getAttribute("nombre");	
			
	
			if(category==categoria)
			{
				
				//tamanio de categoria:
				tam_category=coleccion[0].getElementsByTagName('categoria')[i].childNodes.length;
			
			
			
			
				//PROCESO DE VERIFICACION DE LA SUBCATEGORIA
				
				for(k=0;k<tam_category;k++)
				{
					
					
					
				 try{
					//capturo la subcategoria
					sub_category=coleccion[0].getElementsByTagName('categoria')[i].getElementsByTagName('sub_categoria')[k].getAttribute("nombre");	
					
					if(sub_category==sub_categoria)
					{
						//a mostar los productos
						
						tam_sub_category=coleccion[0].getElementsByTagName('categoria')[i].getElementsByTagName('sub_categoria')[k].childNodes.length;
						arreglo=coleccion[0].getElementsByTagName('categoria')[i].getElementsByTagName('sub_categoria')[k].getElementsByTagName('producto');
						
						for(n=0;n<tam_sub_category;n++)
						{
							try
							{
								//creacion de elementos dinamicos		
								marca=arreglo[n].getElementsByTagName("marca")[0].firstChild.nodeValue;
								modelo=arreglo[n].getElementsByTagName("modelo")[0].firstChild.nodeValue;
								descripcion=arreglo[n].getElementsByTagName("descripcion")[0].firstChild.nodeValue;
								precio=arreglo[n].getElementsByTagName("precio")[0].firstChild.nodeValue;
								imagen=arreglo[n].getElementsByTagName("imagen")[0].firstChild.nodeValue;
								CrearComponenteTipo1(categoria,sub_categoria,marca,modelo,descripcion,precio,imagen);
								//alert(imagen);
							}//end try producto
							
							catch(e)
							{
								
								//alert("exception en producto");
							}//end catch producto
							
							//LLAMADA A LA FUNCION CONSTRUCTORA DE DOM
							
							
							
							
						}//end for producto
				
					
					break;
				
					}//end if de subcategoria
					
					
					t_efectiv_category++; //es decir el num de productos que tiene
				
				
				
				 }//end try de subcategoria
				 
				 
				 catch(e)
				 {
					 //alert("execption en subcategoria")
				  }//end catch subcategoris
				 
				}
				
				//FIN PROCESO DE VERIF. SUBCATEGORIA
				
				break;
				
			}//end if de CATEGORIA
			
			t_efectiv_colecc++;
			
		}//end try categoria	
		catch(e)
		{		
			//alert("exception en categoria");	
		}//end catch categoria
		
	}//end for categoria
}//end function
 
 
 function CrearComponenteTipo1(categoria,sub_categoria,marca,modelo,descripcion,precio,imagen)
{ 
      var refDiv2=document.getElementById('divContenidoProductos');	
	 // se crean las referencia
	 // al div donde se van a insertar
	 
	 
	 var Componente=document.createElement('div');
	 //textos 
	 
	 var NegritaCat=document.createElement('b');var NegritaItem=document.createElement('b');
	 var NegritaMarca=document.createElement('b');var NegritaModelo=document.createElement('b');
	 var NegritaDescrip=document.createElement('b');var NegritaPrecio=document.createElement('b');
	 var txtTituloCateg=document.createTextNode("CATEGORIA: ");
	 var txtTituloItem=document.createTextNode("ITEM: ");
	 var txtTituloMarca=document.createTextNode("MARCA: ");
	 var txtTituloModelo=document.createTextNode("MODELO: ");
	 var txtTituloDescrip=document.createTextNode("CARACTERISTICAS: ");
	 var txtTituloPrecio=document.createTextNode("PRECIO: ");
	 var textCategoria=document.createTextNode(categoria);
	 var textSubcategoria=document.createTextNode(sub_categoria); 	 
	 var textMarca=document.createTextNode(marca);
	 var textModelo=document.createTextNode(modelo);
	 var textDescrip=document.createTextNode(descripcion);
	 var textPrecio=document.createTextNode(precio);
	 var pathImage="imagenes/"+imagen;
	 
		
	 
	 //parrafos:
	 var p_encabezado1=document.createElement('p'); //CATEGORIA
	 var p_encabezado2=document.createElement('p');  //SUBCATEGORIA
	 var p_cuerpo1=document.createElement('p');     //MARCA
	 var p_cuerpo2=document.createElement('p');     //MODELO
	 var p_cuerpo3=document.createElement('p');     //DESCRIPCION
	 var p_cuerpo4=document.createElement('p');    //PRECIO
	 //imagen
	 var img_product=document.createElement('img');
	 
	
	 
	 //elementos
	 //div encabezado
	 var div_encabezado=document.createElement('div');
	 var div_cuerpo=document.createElement('div');
	 var div_image=document.createElement('div');
	 
	 //seteando atributos
	 
	 img_product.setAttribute("src",pathImage);
	 
	 //aniadiendo los text node
	 
	 NegritaCat.appendChild(txtTituloCateg);NegritaItem.appendChild(txtTituloItem);
	 NegritaMarca.appendChild(txtTituloMarca);NegritaModelo.appendChild(txtTituloModelo);
	 NegritaDescrip.appendChild(txtTituloDescrip);NegritaPrecio.appendChild(txtTituloPrecio);
	 
	 
	 
	 
	 p_encabezado1.appendChild(NegritaCat);
	 p_encabezado1.appendChild(textCategoria); 
	 p_encabezado2.appendChild(NegritaItem);
	 p_encabezado2.appendChild(textSubcategoria);
	 p_cuerpo1.appendChild(NegritaMarca);
	 p_cuerpo1.appendChild(textMarca);
	 p_cuerpo2.appendChild(NegritaModelo);
	 p_cuerpo2.appendChild(textModelo);
	 p_cuerpo3.appendChild(NegritaDescrip);
	 p_cuerpo3.appendChild(textDescrip);
	 p_cuerpo4.appendChild(NegritaPrecio);
	 p_cuerpo4.appendChild(textPrecio);
	 //aniadiendo p a los div
	 
	 div_encabezado.appendChild(p_encabezado1);
	 div_encabezado.appendChild(p_encabezado2);
	 div_cuerpo.appendChild(p_cuerpo1);
	 div_cuerpo.appendChild(p_cuerpo2);
	 div_cuerpo.appendChild(p_cuerpo3);
	 div_cuerpo.appendChild(p_cuerpo4);
	 div_image.appendChild(img_product);
	 
	
	 //SETEANDO ESTILOS
	 
	 Componente.style.borderBottom='solid';
	 
	 
	 //aniadiendo todo al div ref:
	 
	 
	 
	 Componente.appendChild(div_encabezado);
	 Componente.appendChild(div_cuerpo);
     Componente.appendChild(div_image);
	 
	 refDiv2.appendChild(Componente);
	
}
 
 
 function RemoverComponentes( )
 {

	 var refDiv=document.getElementById('divContenidoProductos');
	 var arreglo=refDiv.childNodes;
	 var i=0;
	 var tamanio=refDiv.childNodes.length;
	 for(i=0;i<tamanio;i++)
	 {
		 try
		 {
			 refDiv.removeChild(refDiv.firstChild);
			 refDiv.removeChild(arreglo[i]);
			 refDiv.removeChild(refDiv.lastChild);
			 }
			 
			 catch(e)
			 {
			}
	 }
	 
}

