


$(document).ready(function() { 
 
		 //if close button is clicked
			$('.window .close').click(function (e) {
				//Cancel the link behavior
				e.preventDefault();
				$('#mask, .window').hide();
			});    
			 
			 
			 $('#flecha_roja').hide();
						$('#resumen_general').hide();
			
			 
});

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
						$('#flecha_roja').slideToggle("slow");
						$('#resumen_general').slideToggle("slow");
						
					} 
					else 
					{
						$("#capa_resultados").hide();
						$('#flecha_roja').hide();
						$('#resumen_general').hide();
						//$("#capa_resultados").slideDown(500);
						$("#capa_resultados").slideToggle("slow");
						$('#flecha_roja').slideToggle("slow");
						$('#resumen_general').slideToggle("slow");
					}
					

	}
	
	function  cambiaCapaIconoClima()
	{
		var url = document.URL;
		var pos_nombre_archivo =0;
		
		var propiedad_imagen_fondo=$('#icono_clima').css('background-image');
		
		pos_nombre_archivo =propiedad_imagen_fondo.indexOf('Seco', 0);
		
		if(pos_nombre_archivo!=-1)
		{
		CLIMA='lluvioso';
		propiedad_imagen_fondo=propiedad_imagen_fondo.replace("Seco","Lluvioso"); }
		else
		{
		CLIMA='seco';
		propiedad_imagen_fondo=propiedad_imagen_fondo.replace("Lluvioso","Seco"); }
		
			
				
				$('#icono_clima').css('background-image', propiedad_imagen_fondo);
				
				
	}
	
	
	
	