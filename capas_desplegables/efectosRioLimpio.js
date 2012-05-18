

	    $(document).ready(initSpinner);
	
	
	function muestraCapaIndicador()
	{
					
					if ($("#capa_resultados").is(":hidden")) 
					{
					//$("#capa_resultados").slideDown(500);
						$("#capa_resultados").slideToggle("slow");

					} 
					else 
					{
						$("#capa_resultados").hide();
						//$("#capa_resultados").slideDown(500);
						$("#capa_resultados").slideToggle("slow");
					}
					

	}
	
	