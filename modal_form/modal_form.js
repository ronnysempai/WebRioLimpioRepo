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
														height: 300,
														width: 580,
														modal: false
														}); 
												
							
							$( "#dialog" ).css("color","#000000");
							
							$( "#dialog" ).css("font-weight","bold");
							$( "#dialog" ).css("margin-right","50px");
							
							
							
		});
		
		function mostrarResultados()
		{
			$( "#dialog" ).dialog();
		
		}

	/***********************/

		
/*prueba animacion*/
		
		var canvas= new Array();
		var ctx= new Array();
 
		var background;
		var width = 300;
		var height = 200;
 
		var cloud;
		var cloud_x=new Array();
		var variacion1=2;
		
		function init(id_canvas) 
		{
				var  longitudArray=canvas.length;
				
				canvas[longitudArray] = document.getElementById(id_canvas);
				width = canvas[longitudArray].width;
				height = canvas[longitudArray].height;
				ctx[longitudArray] = canvas[longitudArray].getContext("2d");
			 
				
		

		return setInterval(main_loop, 10);
		}
 
function update(i_pos)
{
	if(cloud_x[i_pos]==null)
		cloud_x[i_pos]=0;
		
		cloud_x[i_pos] += 0.5;
			if (cloud_x[i_pos] > 40 ) {
				//cloud_x = -cloud.width;
				 cloud_x[i_pos] = 0;
			}
}
 
function draw(indice_ctx) 
{
			//ctx.drawImage(background,0,0);
			var tubX1=0;
			var tubY1=15;
			
			var tubX2=45;
			var tubY2=30;
			
			
			var tubX3=tubX2;
			var tubY3=tubY2+10;
			
			
			var tubX4=tubX1;
			var tubY4=tubY1+15;
			
			ctx[indice_ctx].clearRect(0,0,60,60);
			
			
				
			/*circulos simulando gotas*/
		    ctx[indice_ctx].fillStyle = '#000';
			
		   ctx[indice_ctx].beginPath();
		   //ctx.arc(cloud_x,75,15,0,(Math.PI/180)*360,true);
		   ctx[indice_ctx].arc(tubX2+variacion1,tubY3+cloud_x[indice_ctx]-5,2,0,(Math.PI/180)*360,true);
		   ctx[indice_ctx].arc(tubX2+variacion1+1,tubY3+cloud_x[indice_ctx]-10,2,0,(Math.PI/180)*360,true);
		   ctx[indice_ctx].arc(tubX2+variacion1-1,tubY3+cloud_x[indice_ctx]-15,2,0,(Math.PI/180)*360,true);
		 
			
		   ctx[indice_ctx].arc(tubX2+cloud_x+5,tubY3+cloud_x[indice_ctx]-5,2,0,(Math.PI/180)*360,true);
		 
		   ctx[indice_ctx].fill();
		   /*/*/
			
			/*tubo inclinado*/
			 //ctx[indice_ctx].fillStyle = '#610B0B';
			 ctx[indice_ctx].fillStyle ='#2E2E2E';
			ctx[indice_ctx].beginPath();
				ctx[indice_ctx].moveTo(tubX1,tubY1);
				ctx[indice_ctx].lineTo(tubX2,tubY2);
				ctx[indice_ctx].lineTo(tubX3,tubY3);
				ctx[indice_ctx].lineTo(tubX4,tubY4);
				ctx[indice_ctx].fill();
			
			/*un solo criculo*/
			/*
		   ctx[indice_ctx].fillStyle = '#000';
		   ctx[indice_ctx].beginPath();
		   //ctx.arc(cloud_x,75,15,0,(Math.PI/180)*360,true);
		   ctx[indice_ctx].arc(tubX2+cloud_x-5,cloud_x+tubY2+7,8,0,(Math.PI/180)*360,true);
		   ctx[indice_ctx].fill();
		   */
		   
		   
		   
		   //if(variacion1>5)
		   variacion1=variacion1*(-1);
		   
		   //variacion1 +=0.2;
		   
			//ctx.drawImage(cloud, cloud_x, 0);
}
 
function main_loop() 
{

			for (i=0;i<canvas.length;i++)
			{	draw(i);
				update(i);
				}
}

			/* fin prueba */