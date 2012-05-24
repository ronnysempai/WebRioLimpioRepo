<?php
	
	require_once('../motor_de_inferencias/phprules/phprules.php');
	
	require_once('../clases/ActividadAgricola.php');
	require_once('../clases/ActividadGanadera.php');
	require_once('../clases/Cultivo.php');
	require_once('../clases/Escorrentia.php');
	require_once('../clases/Pendiente.php');
	require_once('../clases/Poblacion.php');
	require_once('../clases/PracticaAgricola.php');
	require_once('../clases/Rio.php');
	
	
	
	
	
	
	
	
	$datos=$_POST['datos'];
	$arrFuentesContaminacion=Array();
	$rio=new Rio();
	
	if(!empty($datos))
	{
		
		$str_obj_json =$datos;
			
			//echo '>>>'.$str_obj_json;
			
			
			$obj_php = json_decode($str_obj_json);
		
			//print_r($obj_php);
				for($i=0;  $i< count($obj_php); $i++)
				{
					
					
						if(strrpos($obj_php[$i]->idCapa, "agricola"))
						{	
							
							
									$pendiente= new Pendiente();
	
									$pendiente->setPorcentaje($obj_php[$i]->pendiente);
									
									$escorrentia=new Escorrentia();
									
									
									$cultivo=new Cultivo();
									$cultivo->setNombre($obj_php[$i]->cultivo);
									
									
									
									$actividadAgricola=new ActividadAgricola();
									
									$actividadAgricola->setIdCapa($obj_php[$i]->idCapa);
									
									$actividadAgricola->setEstadoClima($obj_php[$i]->estadoClima);
									
									$actividadAgricola->setNumeroHectareas($obj_php[$i]->numeroHectareas);
									

									$actividadAgricola->pendiente=$pendiente;
									$actividadAgricola->cultivo=$cultivo;
									
									
									$practica1=new PracticaAgricola();
									$actividadAgricola->practicaAgricola=$practica1;
									
									$actividadAgricola->escorrentia=$escorrentia;
									
									$arrFuentesContaminacion[]=$actividadAgricola;
									
						}
						else
						if(strrpos($obj_php[$i]->idCapa, "ganadera"))
						{
							$actividadGanadera= new ActividadGanadera();
							$actividadGanadera->setNumeroAnimales( $obj_php[$i]->numeroAnimales);
							$actividadGanadera->setIdCapa($obj_php[$i]->idCapa);
							$arrFuentesContaminacion[]=$actividadGanadera;
						}
						else
						if(strrpos($obj_php[$i]->idCapa, "poblacion"))
						{
							$poblacion= new Poblacion();
							$poblacion->setNumeroHabitantes( $obj_php[$i]->numeroHabitantes);
							$poblacion->setIdCapa($obj_php[$i]->idCapa);
							/**/
							$poblacion->setMasaNitrogenoPromedio($poblacion->getNumeroHabitantes()  *  (4000000 + 550000 )  );
							//masaNitrogenoPromedio=numeroHabitantes*(  mg promedio de nitrogeno por persona/año en orina +  mg promedio de nitrogeno por persona/año en heces  ) 
							$poblacion->setSistemaTratamientoResidual(new SistemaTratamientoResidual() ); 
							
							
							$arrFuentesContaminacion[]=$poblacion;
						}
						else
						if($obj_php[$i]->idCapa=='rio')//if(strrpos($obj_php[$i]->idCapa, "rio"))
						{
							
							$rio->setCaudal($obj_php[$i]->caudal);
							//echo 'caudal '.$rio->getCaudal();
							
						}
						
						//echo 'caudal '.$obj_php[$i]->idCapa;
						
				}
				
							foreach($arrFuentesContaminacion as $obj)
							{
										$wm = new WorkingMemory();
										/*Agergacion de objeto a memoria de trabajo*/
										$wm->insert($obj);
										/*****/
										$rr = new RuleReader();
										/*leer archivo de reglas*/
										$rs = new RuleSession($rr->parseFile("../base_de_conocimiento/reglas.srl"), $wm);
										/******/
										$rs->verbosity = 1;
										/*correr reglas para este objeto*/
										$rs->fireAll();
										/**/
							}
							
							$datos_resultado='';
							$cadActividadAgricola='';
							$cadActividadGanadera='';
							$cadPoblacion='';
							/*mostrar los datos modificados por las reglas en cada objeto*/
							foreach($arrFuentesContaminacion as $i=>$obj)
							{
								
								
								
								if(strrpos($obj->idCapa, "agricola") )
								{
												$datos_resultado.='{';
												$datos_resultado.=' "idCapa": ';
												$datos_resultado.= ' "'.$obj->getIdCapa().'" , ';
												
												$datos_resultado.= ' "cultivo": ';
												$datos_resultado.= ' "'.$obj->getCultivo()->getNombre().'" , ';
												
												$datos_resultado.= ' "Carga Nitrogeno Promedio": ';
												$datos_resultado.= ' "'.$obj->getMasaNitrogenoPromedio().'" , ';
												
												$datos_resultado.= ' "Carga Nitrogeno Aportada al Rio": ';
												$datos_resultado.= ' "'.$obj->getCargaNitrogenoAportada().'" , ';
												
												$datos_resultado.= ' "numeroHectareas": ';
												$datos_resultado.=  ' "'.$obj->getNumeroHectareas().'" , ';
												
												$datos_resultado.= ' "estadoClima": ';
												$datos_resultado.=  ' "'.$obj->getEstadoClima().'" , ';
												
												$datos_resultado.=  ' "pendiente": ';
												$datos_resultado.= ' "'.$obj->getPendiente()->getPorcentaje().'", ';
												
												$datos_resultado.=  ' "escorrrentia": ';
												$datos_resultado.= ' "'.$obj->getEscorrentia()->getPorcentaje().'", ';
												
												$datos_resultado.=  ' "practicaAgricola": ';
												$datos_resultado.= ' "'.$obj->getPracticaAgricola()->getNombre().'", ';
												
												$datos_resultado.=  ' "distanciaCurvaNivel": ';
												$datos_resultado.= ' "'.$obj->getPracticaAgricola()->getDistanciaCurvaNivel().'" ';
												$datos_resultado.= '}';
												

												if ($i < count($arrFuentesContaminacion) - 1) 
												{
														$datos_resultado.= ',';
												}
										
													
								
								}
								else
									if(strrpos($obj->idCapa, "ganadera"))
									{
										$datos_resultado.='{';
											$datos_resultado.= ' "idCapa": ';
											$datos_resultado.=' "'.$obj->getIdCapa().'" , ';
											
											
											$datos_resultado.=' "numeroAnimales": ';
											$datos_resultado.= ' "'.$obj->getNumeroAnimales().'", ';
											$datos_resultado.=' "masaNitrogenoPromedio": ';
											$datos_resultado.= ' "'.$obj->getMasaNitrogenoPromedio().'" ';
											$datos_resultado.='}';
											echo $obj->getMasaNitrogenoPromedio();
											if ($i < count($arrFuentesContaminacion) - 1) 
												{
														$datos_resultado.= ',';
												}
											
									}
									else
									if(strrpos($obj->idCapa, "poblacion"))
									{
											$datos_resultado.='{';
											$datos_resultado.= ' "idCapa": ';
											$datos_resultado.= ' "'.$obj->getIdCapa().'" , ';
											$datos_resultado.= ' "numeroHabitantes": ';
											$datos_resultado.= ' "'.$obj->getNumeroHabitantes().'" , ';
											$datos_resultado.= ' "Carga Nitrogeno Promedio": ';
											$datos_resultado.= ' "'.$obj->getMasaNitrogenoPromedio().'", ';
											$datos_resultado.= ' "Sistama de Tratamiento": ';
											$datos_resultado.= ' "'.$obj-> getSistemaTratamientoResidual()-> getNombre().'" ';
											
											$datos_resultado.='}';
											
											if ($i < count($arrFuentesContaminacion) - 1) 
												{
														$datos_resultado.= ',';
												}
											//echo $datos_resultado;
											
											
											
											
									}
									
									if(strrpos($obj->idCapa, "agricola"))
										$rio->sumaCarga(  $obj->getCargaNitrogenoAportada()); 
									else
										$rio->sumaCarga(  $obj->getMasaNitrogenoPromedio());
									
									
								//print_r($obj);
								
								
							}
							
							 $rio->calculaConcentracion();
											if($datos_resultado!='')
											$datos_resultado.=',';
											
											$datos_resultado.='{';
											$datos_resultado.= ' "idCapa": ';
											$datos_resultado.= ' "rio" , ';
											$datos_resultado.= ' "carga": ';
											$datos_resultado.= ' "'.$rio->getCarga().'" , ';
											$datos_resultado.= ' "caudal": ';
											$datos_resultado.= ' "'.$rio->getCaudal().'" , ';
											$datos_resultado.= ' "concentracion": ';
											$datos_resultado.= ' "'.$rio->getConcentracionContaminante().'"  ';
											$datos_resultado.='}';
											
											
											
								//echo $datos_resultado;
							
								$datos_resultado='['.$datos_resultado.']';
								
								echo ''.$datos_resultado;
				
				exit;
	}
	
	
	
				/*
				$str_obj_json = '{
			   "elemento1": "valor1",
			   "elemento2": 22,
			   "elemento3": null,
			   "masCosas": {
				  "voy": "ahora",
				  "vengo": "ya"
			   }
			}';
			
			*/
			/*
			
			$str_obj_json ='[ {"nombre": "valor"} , {"idCapa":"idcdf","nombre": "valor"} ]';
			
			
			$obj_php = json_decode($str_obj_json);
			
			echo '<div> JSON </div>';
			print_r($obj_php);
			echo '<p>'.$obj_php[1]->idCapa.'</p>';
			*/
	
?>