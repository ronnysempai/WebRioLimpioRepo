/*Prueba demo modal form 
			no deberi hacer esto aaa anyway  probando se aprende*/
			
			///-----------
			
							$(function() {
						// a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
						$( "#dialog:ui-dialog" ).dialog( "destroy" );
						
						var name = $( "#name" ),
							email = $( "#email" ),
							password = $( "#password" ),
							allFields = $( [] ).add( name ).add( email ).add( password ),
							tips = $( ".validateTips" );

						/* function updateTips( t ) {
							tips
								.text( t )
								.addClass( "ui-state-highlight" );
							setTimeout(function() {
								tips.removeClass( "ui-state-highlight", 1500 );
							}, 500 );
						} */

						function checkLength( o, n, min, max ) {
							if ( o.val().length > max || o.val().length < min ) {
								o.addClass( "ui-state-error" );
								updateTips( "Length of " + n + " must be between " +
									min + " and " + max + "." );
								return false;
							} else {
								return true;
							}
						}

						function checkRegexp( o, regexp, n ) {
							if ( !( regexp.test( o.val() ) ) ) {
								o.addClass( "ui-state-error" );
								updateTips( n );
								return false;
							} else {
								return true;
							}
						}
						
						$( "#dialog-form" ).dialog({
							autoOpen: false,
							height: 300,
							width: 400,
							modal: true,
							
							buttons: {
								"Aceptar": function() {
									var bValid = true;
									
									botonAceptarFormulario();
									
									
								},
								"Cancelar": function() {
									$( this ).dialog( "close" );
								}
							},
							close: function() {
								allFields.val( "" ).removeClass( "ui-state-error" );
							}
						});
				
							
							$( "#dialog-form " ).css("background","#39f");
							
							$( "#dialog-form label" ).css("color","green");
							
							$( "#dialog-form label" ).css("font-weight","bold");
							$( "#dialog-form label" ).css("margin-right","50px");
							
							$( "#dialog-form button" ).css("color","green");
							
							$( "#ui-dialog-title-dialog-form" ).css("color","green");
							
							
							
						
					});
					
		function agregarElementosFormularioActividadAgricola()
		{
			$( "#ui-dialog-title-dialog-form" ).html("Actividad Agricola");
			
			
			
			$( "#contenido_formulario_modal" ).html('');
			
			$( "#contenido_formulario_modal" ).append('<table></table>');
			$( "#contenido_formulario_modal table" ).append('<tr id="f1"></tr>');
			
			
			
			//$( "#contenido_formulario_modal" ).append('<div id="capa_form_cultivo"> <label  id="etiqueta_cultivo" >Cultivo</label> </div>');
			
			$( "#contenido_formulario_modal  table #f1" ).append('<td> <label  id="etiqueta_cultivo" >Cultivo</label> </td> ');
			
			$( "#contenido_formulario_modal  table #f1" ).append(' <td> <select id="cultivo" class="text ui-widget-content ui-corner-all"  >		</select>  </td>');
			$( "#contenido_formulario_modal table #f1 td #cultivo" ).append('<option value="arroz">Arroz</option>');
			$( "#contenido_formulario_modal table #f1 td #cultivo" ).append('<option value="banana">Banana</option> ');
			$( "#contenido_formulario_modal table #f1 td #cultivo" ).append('<option value="cacao">Cacao</option> ');
			$( "#contenido_formulario_modal table #f1 td #cultivo" ).append('<option value="azucar">Azúcar</option> ');
			$( "#contenido_formulario_modal table #f1 td #cultivo" ).append('<option value="cafe">Cafe</option> ');
			$( "#contenido_formulario_modal table #f1 td #cultivo" ).append('<option value="cebolla">Cebolla</option> ');
			$( "#contenido_formulario_modal table #f1 td #cultivo" ).append('<option value="maiz">Maiz</option>');
			$( "#contenido_formulario_modal table #f1 td #cultivo" ).append('<option value="papa">Papa</option>');
			$( "#contenido_formulario_modal table #f1 td #cultivo" ).append('<option value="soja">Soja</option>');
			$( "#contenido_formulario_modal table #f1 td #cultivo" ).append('<option value="tomate">Tomate</option>');
			
			
			
			
			
			
			$( "#contenido_formulario_modal table" ).append('<tr id="f2"></tr>');
			
			$( "#contenido_formulario_modal #f2" ).append('<td style="width:177px">  <label  id="etiqueta_hectareas" >Extension de Terreno</label>  </td>');
			$( "#contenido_formulario_modal  #f2" ).append(' <td> <input id="numero_hectareas" type="text" value="" class="text ui-widget-content ui-corner-all" /> </td>');
			$( "#contenido_formulario_modal  #f2 input" ).css('width','80px');
			$( "#contenido_formulario_modal #f2").append('<span id="etiqueta_ha" type="text" value=""  >Ha</span>');
			
			/*
			$( "#contenido_formulario_modal table" ).append('<tr id="f3"></tr>');
			
			$( "#contenido_formulario_modal #f3" ).append('<td> <label id="etiqueta_clima">Clima </label> </td> ');
			$( "#contenido_formulario_modal #f3" ).append('<td> <select id="clima" class="text ui-widget-content ui-corner-all"  >		</select>  </td>');
			$( "#contenido_formulario_modal #f3 #clima" ).append('<option value="seco">Seco</option>');
			$( "#contenido_formulario_modal #f3 #clima" ).append('<option value="lluvioso">Lluvioso</option>');
			*/
			/*$( "#contenido_formulario_modal table" ).append('<tr id="f4"></tr>');
			$( "#contenido_formulario_modal #f4" ).append('<td> <label id="etiqueta_pendiente">Pendiente </> </td> ');
			$( "#contenido_formulario_modal #f4").append('<td> <input id="pendiente" type="text" value=""   class="text ui-widget-content ui-corner-all"  /> </td>');
			$( "#contenido_formulario_modal  #f4 input" ).css('width','80px');
			
			$( "#contenido_formulario_modal #f4").append('<span id="etiqueta_porcentaje" type="text" value=""  >%</span> ');
			*/
			
			
		}
		
		function  agregarElementosFormularioActividadGanadera()
		{
				$( "#ui-dialog-title-dialog-form" ).html("Actividad Ganadera");
			
			
			$( "#contenido_formulario_modal" ).html('');
			
			$( "#contenido_formulario_modal" ).append('<div id="capa_form_numero_animales"> <label  id="etiqueta_numero_animales" >Numero de Animales</label> </div>');
			$( "#contenido_formulario_modal #capa_form_numero_animales" ).append('<input id="numero_animales" type="text" value="" class="text ui-widget-content ui-corner-all"  /> ');
		}
		
		function agregarElementosFormularioPoblacion()
		{
				$( "#ui-dialog-title-dialog-form" ).html("Poblacion");
			
			
			$( "#contenido_formulario_modal" ).html('');
			
			$( "#contenido_formulario_modal" ).append('<div id="capa_form_numero_habitantes"> <label  id="etiqueta_numero_habitantes" >Numero de Habitantes</label> </div>');
			$( "#contenido_formulario_modal #capa_form_numero_habitantes" ).append('<input id="numero_habitantes" type="text" value="" class="text ui-widget-content ui-corner-all"  >		</select> ');
		}
		
		function cargarFormularioRio()
		{
				$( "#ui-dialog-title-dialog-form" ).html("RIO");
			
			
			$( "#contenido_formulario_modal" ).html('');
			
			$( "#contenido_formulario_modal" ).append('<div id="capa_form_caudal"> <label  id="etiqueta_caudal" >Caudal</label> </div>');
			$( "#contenido_formulario_modal #capa_form_caudal" ).append('<input id="caudal" type="text" value="" class="text ui-widget-content ui-corner-all"  > <span >m3/s </span> ');
			
			$( "#idCapaElemento" ).val('rio');
						$( "#dialog-form" ).dialog( "open" );
		}
		
		function cargarFormulario(id_fuente_contaminacion)
		{
					
					cargaFormularioPorTipoFuenteContaminacion(id_fuente_contaminacion)
					$( "#idCapaElemento" ).val(id_fuente_contaminacion);
						$( "#dialog-form" ).dialog( "open" );
		
		}
		
		function cargarDatosFormArray(idCapa)
		{
				
					for (i=0;i<arrayActividadAgricola.length;i++)
					{
							if(arrayActividadAgricola[i]!=null)
							if (arrayActividadAgricola[i].getIdCapa()== idCapa)
							{	$( "#idCapaElemento" ).val(idCapa);
								$( "#cultivo" ).val(''+arrayActividadAgricola[i].getCultivo());
								$( "#numero_hectareas" ).val(''+arrayActividadAgricola[i].getNumeroHectareas());
								$( "#clima" ).val(''+arrayActividadAgricola[i].getEstadoClima());
								$( "#pendiente" ).val(''+arrayActividadAgricola[i].getPendiente());
								return;
							}
					}		 
					
					for (i=0;i<arrayActividadGanadera.length;i++)
					{
							if(arrayActividadGanadera[i]!=null)
							if (arrayActividadGanadera[i].getIdCapa()== idCapa)
							{	$( "#idCapaElemento" ).val(idCapa);
								
								$( "#numero_animales" ).val(''+arrayActividadGanadera[i].getNumeroAnimales());
								
								return;
							}
					}		 
					
					for (i=0;i<arrayPoblacion.length;i++)
					{		
							if(arrayPoblacion[i]!=null)
							if (arrayPoblacion[i].getIdCapa()== idCapa)
							{	$( "#idCapaElemento" ).val(idCapa);
								
								$( "#numero_habitantes" ).val(''+arrayPoblacion[i].getNumeroHabitantes());
								
								return;
							}
					}		 
		
		}
		
		function cargaFormularioPorTipoFuenteContaminacion(id)
		{
			var  id_cortado;
			
			id_cortado=id.substring( 6,id.length-2);
			
			
			if(id_cortado=='poblacion')
			agregarElementosFormularioPoblacion()
			else
			if(id_cortado=='agricola')
			agregarElementosFormularioActividadAgricola();
			else
			if(id_cortado=='ganadera')
				agregarElementosFormularioActividadGanadera();
				
			 cargarDatosFormArray(id);	
		}
		
		
		function botonAceptarFormulario()
		{
				
				idCapa=$( "#idCapaElemento" ).val();
				
				if(idCapa=='rio')
				{
				
					RIO.setCaudal( $('#caudal').val() );
				}
				else
				if( !estaElementoEnArreglos(idCapa) )
				{
							if( $( "#ui-dialog-title-dialog-form" ).html()=="Actividad Agricola")
										almacenarElementoActividadAgricola($('#cultivo').val(),$('#numero_hectareas').val(),$('#clima').val(), $('#pendiente').val())
									else
									if( $( "#ui-dialog-title-dialog-form" ).html()=="Actividad Ganadera")
										 almacenarElementoActividadGanadera($('#numero_animales').val())
									else
										if( $( "#ui-dialog-title-dialog-form" ).html()=="Poblacion")
										almacenarElementoPoblacaion($('#numero_habitantes').val() )
									
									
									
									
				
				}
				else
				{
							if( $( "#ui-dialog-title-dialog-form" ).html()=="Actividad Agricola")
										modificarElementoActividadAgricola()
									else
									if( $( "#ui-dialog-title-dialog-form" ).html()=="Actividad Ganadera")
										 modificarElementoActividadGanadera()
									else
										if( $( "#ui-dialog-title-dialog-form" ).html()=="Poblacion")
										modificarElementoPoblacaion()
									
									
									
									
				
				}
				$( '#dialog-form' ).dialog( "close" );
				
		}
		
		/* inicializacion capa flotante */
		$(function() {
		
							$( "#dialog" ).dialog({
														autoOpen: false,
														title: 'Resultados',
														height: 350,
														width: 1000,
														show: "drop",
														hide: "clip",
														modal: true
														}); 
												
							
							$( "#dialog" ).css("color","#000000");
							$( "#dialog" ).css("font-weight","bold");
							$( "#dialog" ).css("background","#39f");
							
							//$( "#dialog" ).css("opacity","0.5");
							
							//$( "#dialog" ).css("margin-right","50px");
							
							
							
		});
		
		function mostrarResultados()
		{
			$( "#dialog" ).dialog();
		
		}
		
		

	/***********************/

	/* inicio efecto capa modal con gif de circulo de progreso animado*/
	function muestraCapaModalGif()
	{

		var id = '#dialog_modal';
		 
			//Get the screen height and width
			var maskHeight = $(document).height();
			var maskWidth = $(window).width();
		 
		 
			$('#mask').css('width',maskWidth)
			$('#mask').css('height',maskHeight)
			
			//transition effect    
			//$('#mask').fadeIn(1000);   
			//$('#mask').fadeTo("slow",0.3); 
			$('#mask').show();
		
			//Get the window height and width
			var winH = $(window).height();
			var winW = $(window).width();
				   
			//Set the popup window to center
			$(id).css('top',  winH/2-$(id).height()/2);
			$(id).css('left', winW/2-$(id).width()/2);
		 
			//transition effect
		   // $(id).fadeIn(2000); 
			 $(id).show(); 

	}

	function ocultaCapaModalGif()
	{
		$('.window').hide();
		$('#mask').hide();
	}
	/* fin efecto capa modal con gif de circulo de progreso animado*/
	
