/*--------------*/
var arrayActividadAgricola=new Array();
var arrayActividadGanadera=new Array();
var arrayPoblacion=new Array();
var RIO=new Rio();
var arrayResultados=new Array();


	function almacenarElementoActividadAgricola(cultivo,numeroHectareas,estadoClima,pendiente)
	{
			var actividadAgricola = new ActividadAgricola();
			
			actividadAgricola.setIdCapa( $( "#idCapaElemento" ).val());
			
			actividadAgricola.setCultivo(cultivo);
			actividadAgricola.setNumeroHectareas(numeroHectareas);
			actividadAgricola.setEstadoClima(estadoClima);
			actividadAgricola.setPendiente(pendiente);
			
			
			var  longitudArray=arrayActividadAgricola.length;
			
			
			arrayActividadAgricola[longitudArray]=actividadAgricola;
			

	}
	
	
	function modificarElementoActividadAgricola()
	{
			
			
			idCapa=$( "#idCapaElemento" ).val();
			
			
			
			for (i=0;i<arrayActividadAgricola.length;i++)
					{
							if(arrayActividadAgricola[i]!=null)
							if (arrayActividadAgricola[i].getIdCapa()== idCapa)
							{	
							    arrayActividadAgricola[i].setCultivo($( "#cultivo" ).val())	;
								arrayActividadAgricola[i].setNumeroHectareas(	$( "#numero_hectareas" ).val() );
								arrayActividadAgricola[i].setEstadoClima(	$( "#clima" ).val() );
								arrayActividadAgricola[i].setPendiente(	$( "#pendiente" ).val()  );
								return;
							}
					}		 
			
			
			

	}
	
	function almacenarElementoActividadGanadera(numeroAnimales)
	{
			var actividadGanadera = new ActividadGanadera();
			
			actividadGanadera.setIdCapa( $( "#idCapaElemento" ).val());
			
			actividadGanadera.setNumeroAnimales(numeroAnimales);
			
			var  longitudArray=arrayActividadGanadera.length;
			
			arrayActividadGanadera[longitudArray]=actividadGanadera;
			

	}
	
	function modificarElementoActividadGanadera()
	{
		
			
			idCapa=$( "#idCapaElemento" ).val();
			
			
			
			for (i=0;i<arrayActividadGanadera.length;i++)
					{
							if(arrayActividadGanadera[i]!=null)
							if (arrayActividadGanadera[i].getIdCapa()== idCapa)
							{	
							   
								arrayActividadGanadera[i].setNumeroAnimales(	$( "#numero_animales" ).val() );
								
								return;
							}
					}		 
			
			
			

	}
	
	
	
	function almacenarElementoPoblacaion(numeroHabitantes)
	{
			var poblacion = new Poblacion();
			
			poblacion.setIdCapa( $( "#idCapaElemento" ).val());
			
			poblacion.setNumeroHabitantes(numeroHabitantes)
			
			var  longitudArray=arrayPoblacion.length;
			
			arrayPoblacion[longitudArray]=poblacion;
			
			
			

	}
	
	function modificarElementoPoblacaion()
	{
		
			
			idCapa=$( "#idCapaElemento" ).val();
			
			
			
			for (i=0;i<arrayPoblacion.length;i++)
					{
							if(arrayPoblacion[i]!=null)
							if (arrayPoblacion[i].getIdCapa()== idCapa)
							{	
							   
								arrayPoblacion[i].setNumeroHabitantes(	$( "#numero_habitantes" ).val() );
								
								return;
							}
					}		 
			
			
			

	}
	
	
	function eliminarElementoDeArray(idCapa)
	{
		
		
		
			
		
		for (i=0;i<arrayActividadAgricola.length;i++)
		{
				if(arrayActividadAgricola[i]!=null)
				if (arrayActividadAgricola[i].getIdCapa()== idCapa)
					arrayActividadAgricola.splice( i, 1 );
					//delete arrayActividadAgricola[i];
		}		 
		
		for (i=0;i<arrayActividadGanadera.length;i++)
		{
				if(arrayActividadGanadera[i]!=null)
				if (arrayActividadGanadera[i].getIdCapa()== idCapa)
					arrayActividadGanadera.splice( i, 1 );
					//delete arrayActividadGanadera[i];
					
		}		 
		
		for (i=0;i<arrayPoblacion.length;i++)
		{		
				if(arrayPoblacion[i]!=null)
				if (arrayPoblacion[i].getIdCapa()== idCapa)
					arrayPoblacion.splice( i, 1 );
					//delete arrayPoblacion[i];
		}		 
		
		arrayActividadAgricola.filter(Boolean);
		
		
		
	}
	
	
	function estaElementoEnArreglos(idCapa)
	{
				for (i=0;i<arrayActividadAgricola.length;i++)
				{
						if(arrayActividadAgricola[i]!=null)
						if(arrayActividadAgricola[i].getIdCapa()==idCapa)
							return true;
						
				}		 
		
				for (i=0;i<arrayActividadGanadera.length;i++)
						{
								if(arrayActividadGanadera[i]!=null)
									if(arrayActividadGanadera[i].getIdCapa()==idCapa)
										return true;
						}		 
		
				for (i=0;i<arrayPoblacion.length;i++)
				{
						if(arrayPoblacion[i]!=null)
								if(arrayPoblacion[i].getIdCapa()==idCapa)
										return true;
				}		
				
				return false;
	}
	
	function mostrarArray()
	{
		
		var agricola="agricola :";
		var ganadera="ganadera:";
		var poblacion="poblacion:";
		
		for (i=0;i<arrayActividadAgricola.length;i++)
		{
				if(arrayActividadAgricola[i]!=null)
				agricola=agricola+' '+arrayActividadAgricola[i].cultivo;
		}		 
		
		for (i=0;i<arrayActividadGanadera.length;i++)
				{
						if(arrayActividadGanadera[i]!=null)
						ganadera=ganadera+' '+arrayActividadGanadera[i].getIdCapa();
				}		 
		
		for (i=0;i<arrayPoblacion.length;i++)
		{
				if(arrayPoblacion[i]!=null)
				poblacion=poblacion+' '+arrayPoblacion[i].getIdCapa();
		}		
		
		//var str = '{"id":1,"name":"Test1"},{"id":2,"name":"Test2"}';
		var str = '{"idCapa":"'+arrayActividadAgricola[0].idCapa+'","cultivo":"'+arrayActividadAgricola[0].cultivo+'"},{"numHab":'+arrayPoblacion[0].numeroHabitantes+'}';
		var jsonObj = $.parseJSON('[' + str + ']');


		
		alert ( ' \n'+agricola+'\n '+ganadera+'\n '+poblacion+'\n '+jsonObj[1].numHab )
		
		
	}
	
	
	function codificacionJSONDeArreglos()
	{
		
		var cad='';
		
		var cadActividadAgricola='';
		var cadActividadGanadera='';
		var cadPoblacion='';
		
					if(arrayActividadAgricola!=null && arrayActividadAgricola.length!=0)
					{		for (i=0;i<arrayActividadAgricola.length;i++)
							{
								
											if(arrayActividadAgricola[i]!=null)
											{
												cadActividadAgricola+='{';
												cadActividadAgricola += ' "idCapa": ';
												cadActividadAgricola += ' "'+arrayActividadAgricola[i].getIdCapa()+'" , ';
												
												cadActividadAgricola += ' "cultivo": ';
												cadActividadAgricola += ' "'+arrayActividadAgricola[i].getCultivo()+'" , ';
												
												cadActividadAgricola += ' "numeroHectareas": ';
												cadActividadAgricola += ' "'+arrayActividadAgricola[i].getNumeroHectareas()+'" , ';
												
												cadActividadAgricola += ' "estadoClima": ';
												cadActividadAgricola += ' "'+arrayActividadAgricola[i].getEstadoClima()+'" , ';
												
												cadActividadAgricola += ' "pendiente": ';
												cadActividadAgricola += ' "'+arrayActividadAgricola[i].getPendiente()+'" ';
												
												cadActividadAgricola+='}';
											
													if (i < arrayActividadAgricola.length - 1) 
													{
														cadActividadAgricola += ',';
													}
											

										}
							}		 
				}
		
				if(arrayActividadGanadera!=null  && arrayActividadGanadera.length!=0)
				{		
						for (i=0;i<arrayActividadGanadera.length;i++)
						{
							
										if(arrayActividadGanadera[i]!=null)
										{
											cadActividadGanadera+='{';
											cadActividadGanadera += ' "idCapa": ';
											cadActividadGanadera += ' "'+arrayActividadGanadera[i].getIdCapa()+'" , ';
											
											
											cadActividadGanadera += ' "numeroAnimales": ';
											cadActividadGanadera += ' "'+arrayActividadGanadera[i].getNumeroAnimales()+'" ';
											cadActividadGanadera+='}';
										
												if (i < arrayActividadGanadera.length - 1) 
												{
													cadActividadGanadera += ',';
												}
										

									}
					
					}
					
					
				}
				
				if(arrayPoblacion!=null  && arrayPoblacion.length!=0)
				{			for (i=0;i<arrayPoblacion.length;i++)
							{
								
											if(arrayPoblacion[i]!=null)
											{
												cadPoblacion+='{';
												cadPoblacion += ' "idCapa": ';
												cadPoblacion += '"'+arrayPoblacion[i].getIdCapa()+'" , ';
												
												
												cadPoblacion += ' "numeroHabitantes": ';
												cadPoblacion += '"'+arrayPoblacion[i].getNumeroHabitantes()+'" ';
												
												
												cadPoblacion+='}';
											
													if (i < arrayPoblacion.length - 1) 
													{
														cadPoblacion += ',';
													}
											
												
										}
					
					
					
						}
						
					}
				
			if(cadActividadAgricola!='')
				cad+=	cadActividadAgricola;
				
				
			if(cadActividadGanadera !='')
			if(cad!='')
				cad+=','+cadActividadGanadera;
			else
				cad+=cadActividadGanadera;
			
			if(cadPoblacion!='')
				if(cad!='')
					cad+=','+cadPoblacion;
				else
					cad+=cadPoblacion;
				
				if(cad !='')
				cad+=',';
				
					if( RIO !=null)
					{
						cad+='{';
						
						cad += ' "idCapa": ';
						cad += '"'+RIO.getIdCapa()+'" , ';
						
						cad += ' "caudal": ';
						cad += '"'+RIO.getCaudal()+'"  ';
						cad+='}';	
					}
				
				
				
				cad='['+cad+']';
				
		
			//alert(cad);
			return cad;
		var jsonObj = $.parseJSON('[' + cad + ']');

	
	
	}
	
	function muestraResultado(indice)
	{
			var l=arrayResultados.length;
			var a=null;
			var texto='';
			
			$( "#dialog" ).html('');
			$( "#ui-dialog-title-dialog" ).css('color','"red');
							
											for (atributo in arrayResultados[indice])
											{
												if(arrayResultados[indice][atributo].indexOf('agricola', 0)!=-1)
												texto+='<h3 style="color:#31B404 ">Fuentes de Contaminacion Actividad Agricola</h3>';
												
													texto+='<div>';
													if(atributo=='practicaAgricola')
														texto+='Practica Recomendada:';
													else													
													texto+=  ' '+atributo+':';
													
													texto+=  ' '+arrayResultados[indice][atributo]+'';
													texto+='</div>';
											}
											
											
											/*$(document).mousemove(function(e){
												alert(e.pageX +', '+ e.pageY);
													});
												*/	
											$( "#dialog" ).html("<div id='id_capa_resultados' > Los Resultados son: " +texto +'</div>');
											
											$( "#dialog" ).dialog({
														autoOpen: false,
														title: 'Dialogo Básico',
														height: 300,
														width: 550,
														modal: false
														}); 
												$( "#dialog" ).dialog("option", "position", [719, 150]);
											$( "#dialog" ).dialog('open');
			 
	}
	
	function muestraResultadosBeta(jsonObj)
	{
								var s='';
								var pos_x=0;
								var pos_y=0;
								var posicion=0;
					
											//$( "#dialog" ).html("Se guardaron los datos: " + jsonObj.length);
											
											
											for (i=0;i< jsonObj.length;i++)
											{
												if(jsonObj[i].idCapa.indexOf('agricola', 0)!=-1)
												s+='<h3 style="color:#31B404 ">Fuentes de Contaminacion Actividad Agricola</h3>';
												
													
														for (atributo in jsonObj[i])
														 {		
															
															s+='<div>';
																if(atributo=='practicaAgricola')
																s+='Practica Recomendada:';
																else
																s+=  ' '+atributo+':';
																
																s+=  jsonObj[i][atributo];
																//s+='\n';
																s+='</div>';
																
																
															}  
															
													
													//s+=jsonObj[i].toSource(); //convierte objeto JSON a cadena d texto
												
											}
											//alert(  s);
											
											$( "#ui-dialog-title-dialog" ).css('color','"red')
							
											
											$( "#dialog" ).html("<div id='id_capa_resultados' > Los Resultados son: " + s+'</div>');
											$( "#dialog" ).dialog();
											
		
	}
	
	function enviarDatosSistemaExperto()
	{
			var datosCodificadosJSON='';		
					
					datosCodificadosJSON=codificacionJSONDeArreglos();
					
							$.ajax({
										type: "POST",
										url: "aplicacion/modulos/operaciones_generales.php",
										data: "datos="+datosCodificadosJSON,
										success: function(datos)
										{
											
											var jsonObj = $.parseJSON(datos);
											var s='';
											
											var pos_x=0;
											var pos_y=0;
											var posicion=0;
					
											
											arrayResultados=new Array();
											for (i=0;i< jsonObj.length;i++)
											{
												
														for (atributo in jsonObj[i])
														 {		
																
																if(atributo=='idCapa')
																	{
																		posicion=$('#'+jsonObj[i][atributo]).position() ;
																		pos_x=  posicion.left +65;
																		pos_y=posicion.top+15;
																		s+=  ' '+atributo+':';
																		
																	
																		if(document.getElementById('resultado_'+jsonObj[i][atributo]) ==null )
																		$('#imgSE').append('<div id="resultado_'+ jsonObj[i][atributo]+'" style="position:absolute; background:#E3F6CE; top:'+pos_y+'px; left:'+pos_x+'px;" width="60" height="60"><a  name="" href="#" onclick=muestraResultado('+arrayResultados.length+')>Consulta Resultados</a></div>');
																		arrayResultados[arrayResultados.length ]=jsonObj[i];
																		
																	}
																else
																	s+=  ' '+atributo+':';
																
															}  
															
													
													
												
											}
											
									  }
							});
	}