/*--------------*/
var arrayActividadAgricola=new Array();
var arrayActividadGanadera=new Array();
var arrayPoblacion=new Array();



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
				
				
				cad='['+cad+']';
				
		
			//alert(cad);
			return cad;
		var jsonObj = $.parseJSON('[' + cad + ']');

	
	
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
											alert(datos);
											var jsonObj = $.parseJSON(datos);
											var s='';
											//$( "#dialog" ).html("Se guardaron los datos: " + jsonObj.length);
											
											for (i=0;i< jsonObj.length;i++)
											{
												if(jsonObj[i].idCapa.indexOf('agricola', 0)!=-1)
												s+='\n Fuentes de Contaminacion Actividad Agricola \n';
												//s+='<h3 style="color:#39f ">Fuentes de Contaminacion Actividad Agricola</h3>';
												
													
														/*for (x in jsonObj[i])
														 {		
															s+='\n';
																if(x=='practicaAgricola')
																s+='Practica Recomendada:';
																else
																s+=  ' '+x+':';
																s+=  jsonObj[i][x];
																s+='\n';
															}  
															*/
													
													//s+=jsonObj[i].toSource();
												
											}
											alert(  s);
											//$( "#dialog" ).html("Se guardaron los datos: " + s);
											//$( "#dialog" ).dialog();
												//
									  }
							});
	}