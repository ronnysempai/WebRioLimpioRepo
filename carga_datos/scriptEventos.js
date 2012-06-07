/*--------------*/
var arrayActividadAgricola=new Array();
var arrayActividadGanadera=new Array();
var arrayPoblacion=new Array();
var RIO=new Rio();
var CLIMA='seco';
var PENDIENTE=0;
var arrayResultados=new Array();
var arrayInfoPracticasAgricolas=new Array();


	function almacenarElementoActividadAgricola(cultivo,numeroHectareas,estadoClima,pendiente)
	{
	
			var actividadAgricola = new ActividadAgricola();
			
			
			actividadAgricola.setIdCapa( $( "#idCapaElemento" ).val());
			
			actividadAgricola.setCultivo(cultivo);
			actividadAgricola.setNumeroHectareas(numeroHectareas);
			//actividadAgricola.setEstadoClima(estadoClima);
			actividadAgricola.setPendiente(pendiente);
			
			
			var  longitudArray=arrayActividadAgricola.length;
			
			
			arrayActividadAgricola[longitudArray]=actividadAgricola;
			

	}
	
	
	function modificarElementoActividadAgricola()
	{
			
			
			idCapa=$("#idCapaElemento").val();
			
			for (i=0;i<arrayActividadAgricola.length;i++)
					{
							if(arrayActividadAgricola[i]!=null)
							if (arrayActividadAgricola[i].getIdCapa()== idCapa)
							{	
							    arrayActividadAgricola[i].setCultivo($( "#cultivo" ).val())	;
								arrayActividadAgricola[i].setNumeroHectareas(	$( "#numero_hectareas" ).val() );
								//arrayActividadAgricola[i].setEstadoClima(	$( "#clima" ).val() );
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
	
	function asignarPrametrosGenerales()
	{
			var caudal=$('#caudal').val();
			var distancia_uso_suelo=$('#distancia_uso_suelo').val();
			var pendiente=$('#one').val();
			
			if( ! ( !isNaN(parseFloat(caudal)) && isFinite(caudal) ))
			{	alert('por favor ingrese un dato valido en el caudal del rio')
				return;
			}
			if(  !( !isNaN(parseFloat(pendiente)) && isFinite(pendiente)  ) )
			{	alert('por favor ingrese un dato valido en la pendiente del terreno ')
				return;
			}
			
			RIO.setIdCapa('rio');
			RIO.setCaudal(caudal);
			
			PENDIENTE=pendiente;
			muestraCapaConfiguracion()
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
												//cadActividadAgricola += ' "'+arrayActividadAgricola[i].getEstadoClima()+'" , ';
												cadActividadAgricola += ' "'+CLIMA+'" , ';
												
												cadActividadAgricola += ' "pendiente": ';
												//cadActividadAgricola += ' "'+arrayActividadAgricola[i].getPendiente()+'" ';
												cadActividadAgricola += ' "'+PENDIENTE+'", ';
												
												cadActividadAgricola += ' "aplicarPractica": ';
												//cadActividadAgricola += ' "'+arrayActividadAgricola[i].getPendiente()+'" ';
												cadActividadAgricola += ' "'+arrayActividadAgricola[i].getAplicarPractica()+'" ';
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
												cadPoblacion += '"'+arrayPoblacion[i].getNumeroHabitantes()+'", ';
												
												cadPoblacion += ' "aplicarMetodo": ';
												cadPoblacion += '"'+arrayPoblacion[i].getAplicarMetodo()+'" ';
												
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
	
	function aplicarMetodo(idCapa)
	{
	
		$( "#dialog" ).dialog('close');
		
		for (i=0;i<arrayActividadAgricola.length;i++)
					{
							if(arrayActividadAgricola[i]!=null)
							if (arrayActividadAgricola[i].getIdCapa()== idCapa)
							{	
							    if(arrayActividadAgricola[i].getAplicarPractica()==1)
								arrayActividadAgricola[i].setAplicarPractica(0);
								else
								arrayActividadAgricola[i].setAplicarPractica(1);
								
							}
					}		 
		
		for (i=0;i<arrayPoblacion.length;i++)
					{
							if(arrayPoblacion[i]!=null)
							if (arrayPoblacion[i].getIdCapa()== idCapa)
							{	
							   
							   if(arrayPoblacion[i].getAplicarMetodo()==1)
							   arrayPoblacion[i].setAplicarMetodo(0);
							   else
								arrayPoblacion[i].setAplicarMetodo(1);
								
							}
					}	
					
			//enviarDatosSistemaExperto()
	}
	
	function estaActivadoAplicarMetodo(idCapa)
	{
		
		for (i=0;i<arrayActividadAgricola.length;i++)
					{
							if(arrayActividadAgricola[i]!=null)
							if (arrayActividadAgricola[i].getIdCapa()== idCapa)
							{	
							   if(arrayActividadAgricola[i].getAplicarPractica()==1)
								return true;
								
							}
					}		 
		
		for (i=0;i<arrayPoblacion.length;i++)
					{
							if(arrayPoblacion[i]!=null)
							if (arrayPoblacion[i].getIdCapa()== idCapa)
							{	
							   
								
								 if(arrayPoblacion[i].getAplicarMetodo()==1)
								return true;
								
							}
					}

					return false;		
	}
	
	function muestraResultado(indice)
	{
			var l=arrayResultados.length;
			var a=null;
			var texto='';
			var informacion_practica='';
			var tags_metodo_recomendado='';
			
			$( "#dialog" ).html('');
			$( "#ui-dialog-title-dialog" ).css('color','"red');
							
											
												if(arrayResultados[indice]['idCapa'].indexOf('agricola', 0)!=-1)
												{
												
													
							
												
													texto+='<div id="id_capa_resumen" style="border-bottom: 1px solid #31B404;" >';
													
													texto+='<h3 style="color:#05991D; margin-bottom:10px;">Resumen de Fuente de Contaminacion Actividad Agricola </h3>';
													texto+='<div>';
													texto+=   ' Cultivo:'+' '+arrayResultados[indice]['cultivo']+'';
													texto+='<img  style="margin-left:40px;"  title="" src="imagenes/cultivos/'+arrayResultados[indice]['cultivo']+'.png" alt=""  />'
													texto+='</div>';
													texto+='<div>';
													texto+=   'Masa de Nitrogeno en Fertilizantes:'+' '+formatoNotacionCientifica(arrayResultados[indice]['Carga Nitrogeno Promedio'])+' mg ';
													texto+='</div>';
													texto+='<div>';
													texto+=   'Perdida de Nitrogeno en Fertilizantes por Escorrentia:'+' '+arrayResultados[indice]['escorrrentia']+' %';
													texto+='</div>';
													texto+='<div>';
													texto+=   'Carga Nitrogeno Aportada al Rio:'+' '+formatoNotacionCientifica(arrayResultados[indice]['Carga Nitrogeno Aportada al Rio'])+' mg/año ' ;
													texto+='</div>';
													cad_tmp=(arrayResultados[indice]['practicaAgricola']!='')?arrayResultados[indice]['practicaAgricola']:'No hay practica';
													
													texto+=   ' Practica Recomendada:'+' <span id="nombre_practica" onClick="muestraOcultaCapasEnModal()" >  '+cad_tmp.replace(/_/gi," ")+'</span>';
													
													//texto+=  '<button id="btoAplicarPractica" style="margin-left:40px;"  onclick="aplicarMetodo('+"'"+arrayResultados[indice]['practicaAgricola']+"'"+')">Aplicar</button>';
													txt_tmp= estaActivadoAplicarMetodo(arrayResultados[indice]['idCapa']) ? 'checked=checked' :'' 
													if(arrayResultados[indice]['practicaAgricola']!='')
													texto+=  '<input type="checkbox" name="option1" '+txt_tmp+' onclick="aplicarMetodo('+"'"+arrayResultados[indice]['idCapa']+"'"+')" value="Milk"> Aplicar'
													if(txt_tmp!='' && arrayResultados[indice]['costoPractica']!='0')
													texto+='<p>Costo de Aplicar Practica: $ '+arrayResultados[indice]['costoPractica']+'</p>';
													
													texto+='</div>';
													
													texto+='<div id="capa_intermedia_contaminante_practica">';
													
													texto+='</div>';
													
													texto+='<div id="id_capa_practica_recomendada" >';
													texto+='<div>'; 
													texto+=   ' Practica Recomendada:'+' <span id="nombre_practica" >  '+cad_tmp+'</span>';
													texto+=  '<input type="checkbox" name="option2" '+txt_tmp+' onclick="aplicarMetodo('+"'"+arrayResultados[indice]['idCapa']+"'"+')" value="Milk"> Aplicar'
													texto+='</div>';
													texto+='<div id="descripcion_imagen">';
													texto+=   ' Descripcion: <article>'+' '+arrayInfoPracticasAgricolas[arrayResultados[indice]['practicaAgricola']]+'</article> ';
													texto+='<img  style="margin-left:40px;"  title="" src="imagenes/practicasAgricolas/'+cad_tmp+'.jpg" alt=""  />'
													texto+=  ' <span id="atras" onClick="muestraOcultaCapasEnModal()" > Atras</span>';
													texto+='</div>';
													
													texto+='</div>';
													
													
													}
													else
													if(arrayResultados[indice]['idCapa'].indexOf('poblacion', 0)!=-1)
													{
														texto+='<div id="id_capa_resumen" style="border-bottom: 1px solid #31B404;" >';
													
														texto+='<h3 style="color:#05991D; margin-bottom:10px;">Resumen de Fuente de Contaminacion Poblacion </h3>';
														
														texto+='<div>';
														texto+=   'Masa de Nitrogeno aportado de Agua Residual:'+' '+formatoNotacionCientifica(arrayResultados[indice]['Carga Nitrogeno Promedio'])+' mg/año';
														texto+='</div>';
														texto+='<div>';
														texto+=   'Metodo de Tratamiento Residual Recomendado:'+' '+arrayResultados[indice]['Sistema de Tratamiento'].replace(/_/gi," ");
														txt_tmp= estaActivadoAplicarMetodo(arrayResultados[indice]['idCapa']) ? 'checked=checked' :'' 
														texto+=  '<input type="checkbox" name="option1" '+txt_tmp+' onclick="aplicarMetodo('+"'"+arrayResultados[indice]['idCapa']+"'"+')" value="Milk"> Aplicar'
														if(txt_tmp!='' && arrayResultados[indice]['Costo Sistema de Tratamiento']!='0')
														texto+='<p>Costo de Aplicar Practica: $ '+arrayResultados[indice]['Costo Sistema de Tratamiento']+'</p>';
														texto+='</div>';
														
														texto+='</div>';
														
													}
											
											
											
											$( "#dialog" ).html("<div  class='modalDiv'  > " +texto +'</div>');
											
											//$( "#dialog" ).dialog("option", "position", [719, 150]);
											$( "#dialog" ).dialog('open');
			 
	}
	
	function muestraOcultaCapasEnModal()
	{
		
		
		
		
		
				if ($("#id_capa_practica_recomendada").is(":hidden")) 
					{
					
						$('#id_capa_practica_recomendada').show('clip');
						$('#id_capa_resumen').hide('clip');
					} 
					else 
					{
					$('#id_capa_practica_recomendada').hide('clip');
					
						$('#id_capa_resumen').show('clip');
					}
	}
	

	/****/
	
	
	
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
											
											
							
											
											$( "#dialog" ).html("<div id='id_capa_resultados' > Los Resultados son: " + s+'</div>');
											$( "#dialog" ).dialog();
											
		
	}
	
	function cargarInformacionPracticasAgricolas()
	{	var descripcion='';	
			
			$.ajax({
			type: "POST",
								url: "practicasAgricolas/practicas.txt",
								data: "datos='' ",		
										success: function(datos)
										{//alert(datos)
											var jsonObj = $.parseJSON(datos);
											arrayInfoPracticasAgricolas=new Array();				
											for (i=0;i< jsonObj.length;i++)
											{
													
														arrayInfoPracticasAgricolas[''+jsonObj[i]['practica']]='...'//+jsonObj[i]['descripcion'];	
											}				
											
												
											
											
									  }
							});
							
							
		
	}
	
	function ordenarElementosPorContaminacion()
	{
			var l=arrayResultados.length;
			var a=null;
			var texto='';
			var informacion_practica='';
			var tags_metodo_recomendado='';
			var arrOrdenContaminante=new Array();
			
			$( "#dialog" ).html('');
			$( "#ui-dialog-title-dialog" ).css('color','"red');
						
						
											for(indice=0;indice<arrayResultados.length;indice++)
												if(arrayResultados[indice]['idCapa'].indexOf('agricola', 0)!=-1)
												{
														arrOrdenContaminante[arrayResultados[indice]['idCapa']]= arrayResultados[indice]['Carga Nitrogeno Promedio']
														
													
												}
												else
													if(arrayResultados[indice]['idCapa'].indexOf('poblacion', 0)!=-1)
													{
														arrOrdenContaminante[arrayResultados[indice]['idCapa']]=arrayResultados[indice]['Carga Nitrogeno Promedio']
														
													}
												
													arrOrdenContaminante.sort();
												
												i=0	
												for (key in arrOrdenContaminante)
												{
													posicion=$('#'+key).position() ;
																			pos_x=  posicion.left ;
																			pos_y=posicion.top;
												$('#imgSE').append('<div id="orden_'+ key+'" style="position:absolute; background:#E3F6CE; top:'+pos_y+'px; left:'+pos_x+'px;" width="60" height="60"><button  name=""  >'+(i+1)+'</button></div>');
												i++;
	}											}
	
	function formatoNotacionCientifica(numero)
	{
		var aux = numero;
		var nDigitos = 0;

		while (aux >= 10)
		{			
					aux = aux/10;
					
					nDigitos = nDigitos + 1;
				aux =aux.toFixed(4)
		}	
		
		
		return aux+'x10'+'<sup>'+nDigitos+'</sup>'
	}
	
	function enviarDatosSistemaExperto()
	{
			var datosCodificadosJSON='';		
					
					if(RIO.getCaudal()==0 ||  RIO.getCaudal()==null )
					{
						alert('ud debe ingresar un valor para el caudal del rio');
						return;
					}
					
					datosCodificadosJSON=codificacionJSONDeArreglos();
					
					muestraCapaModalGif();
					
							$.ajax({
										type: "POST",
										url: "aplicacion/modulos/operaciones_generales.php",
										data: "datos="+datosCodificadosJSON,
										success: function(datos)
										{
											ocultaCapaModalGif();
											
											var jsonObj = $.parseJSON(datos);
											var s='';
											var c='';
											
											var pos_x=0;
											var pos_y=0;
											var posicion=0;
					
											
											arrayResultados=new Array();
											for (i=0;i< jsonObj.length;i++)
											{
												
														for (atributo in jsonObj[i])
														 {		
																if(jsonObj[i][atributo]!='rio')
																	{	if(atributo=='idCapa')
																		{
																			posicion=$('#'+jsonObj[i][atributo]).position() ;
																			pos_x=  posicion.left +65;
																			pos_y=posicion.top+15;
																			//s+=  ' '+atributo+':';
																			
																		
																			if(document.getElementById('resultado_'+jsonObj[i][atributo]) ==null )
																			$('#imgSE').append('<div id="resultado_'+ jsonObj[i][atributo]+'" style="position:absolute; background:#E3F6CE; top:'+pos_y+'px; left:'+pos_x+'px;" width="60" height="60"><button  name=""  onclick=muestraResultado('+arrayResultados.length+')>Consulta Resultados</button></div>');
																			arrayResultados[arrayResultados.length ]=jsonObj[i];
																			
																		}
																	
																}
																else
																{
																if(jsonObj[i]['excedeLimite']=='1')
																$('#capa_resultados').css('backgroundImage',"url(imagenes/Excede.png)")	//s+='<article>Exceso de Contaminante , pruebe metodos planteados</article> ';
																else
																	$('#capa_resultados').css('backgroundImage',"url('imagenes/No excede.png')")//s+='<article>Felicitaciones Contaminante no en exceso</article> ';
																
																
																
																if(jsonObj[i]['costoAplicarMetodos']!='0')
																c+='<article> Los costos de implementacion de la solucion son: $'+jsonObj[i]['costoAplicarMetodos']+'</article>';
																
																$('#resumen_general').html('<div>La concentracion del contaminante es: '+jsonObj[i]['concentracion']+' mg/l '+c+'</div>');
																
																}
															}  
															
											}
											
											ordenarElementosPorContaminacion()
											muestraCapaIndicador();
											cargarInformacionPracticasAgricolas();
											
									  }
							});
	}