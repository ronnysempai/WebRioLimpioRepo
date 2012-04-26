<?php
	
	require_once('../motor_de_inferencias/phprules/phprules.php');
	require_once('../clases/Pendiente.php');
	require_once('../clases/ActividadAgricola.php');
	require_once('../clases/Cultivo.php');
	require_once('../clases/PracticaAgricola.php');
	
	
	
	
	$datos=$_POST['datos'];
	$arrFuentesContaminacion=Array();
	
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
									
									
									$cultivo=new Cultivo();
									$cultivo->setNombre($obj_php[$i]->cultivo);
									$cultivo->setCiclo('largo');
									
									
									$actividadAgricola=new ActividadAgricola();
									
									$actividadAgricola->setEstadoClima($obj_php[$i]->estadoClima);
									
									
									

									$actividadAgricola->pendiente=$pendiente;
									$actividadAgricola->cultivo=$cultivo;
									
									
									$practica1=new PracticaAgricola();
									$actividadAgricola->practicaAgricola=$practica1;
									
									
									$arrFuentesContaminacion[]=$actividadAgricola;
							
						}
						else
						if(strrpos($obj_php[$i]->idCapa, "ganadera"))
						{
							//to do
						}
						
						
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
				
							/*mostrar los dtaos modificados por las reglas en cada objeto*/
							foreach($arrFuentesContaminacion as $obj)
							{
								echo '<p></p>';
								print_r($obj);
								
							}
				
				
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