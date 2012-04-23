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
	
	function almacenarElementoActividadGanadera(numeroAnimales)
	{
			var actividadGanadera = new ActividadGanadera();
			
			actividadGanadera.setIdCapa( $( "#idCapaElemento" ).val());
			
			actividadGanadera.setNumeroAnimales(numeroAnimales);
			
			var  longitudArray=arrayActividadGanadera.length;
			
			arrayActividadGanadera[longitudArray]=actividadGanadera;
			

	}
	
	function almacenarElementoPoblacaion(numeroHabitantes)
	{
			var poblacion = new Poblacion();
			
			poblacion.setIdCapa( $( "#idCapaElemento" ).val());
			
			poblacion.setNumeroHabitantes(numeroHabitantes)
			
			var  longitudArray=arrayPoblacion.length;
			
			arrayPoblacion[longitudArray]=poblacion;
			
			
			

	}
	
	
	function eliminarElementoDeArray(idCapa)
	{
		
		for (i=0;i<arrayActividadAgricola.length;i++)
		{
				if(arrayActividadAgricola[i]!=null)
				if (arrayActividadAgricola[i].getIdCapa()== idCapa)
					delete arrayActividadAgricola[i];
		}		 
		
		for (i=0;i<arrayActividadGanadera.length;i++)
		{
				if(arrayActividadGanadera[i]!=null)
				if (arrayActividadGanadera[i].getIdCapa()== idCapa)
					delete arrayActividadGanadera[i];
		}		 
		
		for (i=0;i<arrayPoblacion.length;i++)
		{		
				if(arrayPoblacion[i]!=null)
				if (arrayPoblacion[i].getIdCapa()== idCapa)
					delete arrayPoblacion[i];
		}		 
		
	
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
					
					if(arrayActividadAgricola!=null)
					for (i=0;i<arrayActividadAgricola.length;i++)
					{
						
									if(arrayActividadAgricola[i]!=null)
									{
										cad+='{';
										cad += ' "idCapa": ';
										cad += ' "'+arrayActividadAgricola[i].getIdCapa()+'" ';
										
										cad += ' "cultivo": ';
										cad += ' "'+arrayActividadAgricola[i].getCultivo()+'" ';
										
										cad += ' "numeroHectareas": ';
										cad += ' "'+arrayActividadAgricola[i].getNumeroHectareas()+'" ';
										
										cad += ' "estadoClima": ';
										cad += ' "'+arrayActividadAgricola[i].getEstadoClima()+'" ';
										
										cad += ' "pendiente": ';
										cad += ' "'+arrayActividadAgricola[i].getPendiente()+'" ';
										
										cad+='}';
									
											if (i < arrayActividadAgricola.length - 1) 
											{
												cad += ',';
											}
									

								}
					}		 
					
			cad+=',';
		
		
		
				if(arrayActividadGanadera!=null)
				for (i=0;i<arrayActividadGanadera.length;i++)
				{
					
								if(arrayActividadGanadera[i]!=null)
								{
									cad+='{';
									cad += ' "idCapa": ';
									cad += ' "'+arrayActividadGanadera[i].getIdCapa()+'" ';
									
									
									cad += ' "numeroHabitantes": ';
									cad += ' "'+arrayActividadGanadera[i].getNumeroAnimales()+'" ';
									
									
									cad+='}';
								
										if (i < arrayActividadGanadera.length - 1) 
										{
											cad += ',';
										}
								

							}
					
					
					
				}
				
				cad+=',';
				if(arrayPoblacion!=null)
				for (i=0;i<arrayPoblacion.length;i++)
				{
					
								if(arrayPoblacion[i]!=null)
								{
									cad+='{';
									cad += ' "idCapa": ';
									cad += '"'+arrayPoblacion[i].getIdCapa()+'" ';
									
									
									cad += ' "numeroAnimales": ';
									cad += '"'+arrayPoblacion[i].getNumeroHabitantes()+'" ';
									
									
									cad+='}';
								
										if (i < arrayPoblacion.length - 1) 
										{
											cad += ',';
										}
								
									
							}
					
					
					
				}
				
				cad='['+cad+']';
				
		
		
		alert(cad+'     -');
		var jsonObj = $.parseJSON('[' + cad + ']');


		
		
	
	}