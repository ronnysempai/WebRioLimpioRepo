

function muestraCapaConfiguracion()
	{
					
					if ($("#capa_form_configuracion").is(":hidden")) 
					{
					
						$("#capa_form_configuracion").slideToggle("slow");

					} 
					else 
					{
						//$("#capa_form_configuracion").hide();
						
						//$("#capa_form_configuracion").slideToggle("slow");
						$("#capa_form_configuracion").slideUp("slow")
					}
					

	}
	
	
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
	
	