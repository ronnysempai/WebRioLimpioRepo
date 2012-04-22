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

		
		alert ( ' \n'+agricola+'\n '+ganadera+'\n '+poblacion )
		
		
	}