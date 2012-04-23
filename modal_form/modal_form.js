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
									
									if( $( "#ui-dialog-title-dialog-form" ).html()=="Actividad Agricola")
										almacenarElementoActividadAgricola($('#cultivo').val(),$('#numero_hectareas').val(),$('#clima').val(), $('#pendiente').val())
									else
									if( $( "#ui-dialog-title-dialog-form" ).html()=="Actividad Ganadera")
										 almacenarElementoActividadGanadera($('#numero_animales').val())
									else
										if( $( "#ui-dialog-title-dialog-form" ).html()=="Poblacion")
										almacenarElementoPoblacaion($('#numero_habitantes').val() )
									
									$( this ).dialog( "close" );
									
									
									
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
			
			$( "#contenido_formulario_modal" ).append('<div id="capa_form_cultivo"> <label  id="etiqueta_cultivo" >Cultivo</label> </div>');
			$( "#contenido_formulario_modal #capa_form_cultivo" ).append('<select id="cultivo" class="text ui-widget-content ui-corner-all"  >		</select> ');
			$( "#contenido_formulario_modal #capa_form_cultivo #cultivo" ).append('<option value="arroz">Arroz</option>');
			$( "#contenido_formulario_modal #capa_form_cultivo #cultivo" ).append('<option value="trigo">Trigo</option>');
			$( "#contenido_formulario_modal #capa_form_cultivo #cultivo" ).append('<option value="maiz">Maiz</option>');
			$( "#contenido_formulario_modal #capa_form_cultivo #cultivo" ).append('<option value="papa">Papa</option>');
			$( "#contenido_formulario_modal #capa_form_cultivo #cultivo" ).append('<option value="frijol">Frijol</option> ');
			$( "#contenido_formulario_modal #capa_form_cultivo #cultivo" ).append('<option value="pepino">Pepino</option> ');
		 	$( "#contenido_formulario_modal #capa_form_cultivo #cultivo" ).append('<option value="cebolla">Cebolla</option> ');
			$( "#contenido_formulario_modal #capa_form_cultivo #cultivo" ).append('<option value="cana_azucar">Caña de azúcar</option> ');
			$( "#contenido_formulario_modal #capa_form_cultivo #cultivo" ).append('<option value="banana">Banana</option> ');
			$( "#contenido_formulario_modal #capa_form_cultivo #cultivo" ).append('<option value="algodon">Algodon</option> ');
			
			
			$( "#contenido_formulario_modal" ).append('<div id="capa_form_hectareas">  <label  id="etiqueta_hectareas" >Numero de Hectareas</label>  </div>');
			$( "#contenido_formulario_modal  #capa_form_hectareas" ).append('<input id="numero_hectareas" type="text" value="" class="text ui-widget-content ui-corner-all" />');
			$( "#contenido_formulario_modal  #capa_form_hectareas input" ).css('width','80px');
			
			$( "#contenido_formulario_modal" ).append('<div id="capa_form_clima"> <label id="etiqueta_clima">Clima </> </div> ');
			$( "#contenido_formulario_modal #capa_form_clima" ).append('<select id="clima" class="text ui-widget-content ui-corner-all"  >		</select> ');
			$( "#contenido_formulario_modal #capa_form_clima #clima" ).append('<option value="seco">Seco</option>');
			$( "#contenido_formulario_modal #capa_form_clima #clima" ).append('<option value="lluvioso">Lluvioso</option>');
			
			$( "#contenido_formulario_modal" ).append('<div id="capa_form_pendiente"> <label id="etiqueta_pendiente">Pendiente </> </div> ');
			$( "#contenido_formulario_modal #capa_form_pendiente").append('<input id="pendiente" type="text" value="" class="text ui-widget-content ui-corner-all"  /> ')
			
			
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
		
		function cargarFormulario(id_fuente_contaminacion)
		{
					
					cargaFormularioPorTipoFuenteContaminacion(id_fuente_contaminacion)
					$( "#idCapaElemento" ).val(id_fuente_contaminacion);
						$( "#dialog-form" ).dialog( "open" );
		
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
		}
		
		$(function() {
							$( "#dialog" ).css("color","green");
							
							$( "#dialog" ).css("font-weight","bold");
							$( "#dialog" ).css("margin-right","50px");
							$( "#ui-dialog-title-dialog" ).css('color','"red')
							
		});
		
		function mostrarResultados()
		{
			$( "#dialog" ).dialog();
		
		}
			
			
			/* fin prueba */