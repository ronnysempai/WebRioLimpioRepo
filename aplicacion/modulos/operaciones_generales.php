<?php
	
	require_once('../motor_de_inferencias/phprules/phprules.php');
	require_once('../clases/Pendiente.php');
	require_once('../clases/ActividadAgricola.php');
	require_once('../clases/Cultivo.php');
	require_once('../clases/PracticaAgricola.php');
	require_once('../clases/ControlReglas.php');
	
	
	
	$datos=$_POST['datos'];
	
	if(!empty($datos))
	{
		
		$str_obj_json =$datos;
			
			echo '>>>'.$str_obj_json;
			//$str_obj_json ='[ {"nombre": "valor"} , {"idCapa":"idcdf","nombre": "valor"} ]';
			
			$obj_php = json_decode($str_obj_json);
		
			print_r($obj_php);
				for($i=0;  $i< count($obj_php); $i++)
				{
						echo '<p>*****'.$obj_php[$i]->idCapa.'</p>';
						
				}
				
				exit;
	}
	
	
	$pendiente= new Pendiente();
	
	$pendiente->setPorcentaje(20);
	
	
	$cultivo=new Cultivo();
	$cultivo->setNombre('banano');
	$cultivo->setCiclo('largo');
	
	
	$actividadAgricola=new ActividadAgricola();
	
	$actividadAgricola->setEstadoClima('lluvioso');
	
	
	

	$actividadAgricola->pendiente=$pendiente;
	$actividadAgricola->cultivo=$cultivo;
	
	
	$practica1=new PracticaAgricola();
	$actividadAgricola->practicaAgricola=$practica1;
	
	/////////////////////////////
	
	$pendiente2= new Pendiente();
	
	$pendiente2->setPorcentaje(35);
	
	
	$cultivo2=new Cultivo();
	$cultivo2->setNombre('algodon');
	$cultivo2->setCiclo('corto');
	
	
	
	$actividadAgricola2=new ActividadAgricola();
	
	$actividadAgricola2->pendiente=$pendiente2;
	
	$actividadAgricola2->cultivo=$cultivo2;
	$practica2=new PracticaAgricola();
	$actividadAgricola2->practicaAgricola=$practica2;
	
	$arr[]=$actividadAgricola;
	$arr[]=$actividadAgricola2;
	//$objA=new A(1,3);
	//$wm->insert($objA);
	
	foreach($arr as $obj)
	{
		$wm = new WorkingMemory();
		
	
		$wm->insert($obj);
	
	
	
	$rr = new RuleReader();
	//$rs = new RuleSession($rr->parseFile("test/rules/advanced_logic.srl"), $wm);
	
	
	$rs = new RuleSession($rr->parseFile("../base_de_conocimiento/reglas.srl"), $wm);
	
	$rs->verbosity = 1;
	$rs->fireAll();
	
	}
	
	
	echo '<p>---</p>';
	print_r($actividadAgricola);
	echo '<p>---</p>';
	print_r($actividadAgricola2);
	echo '<p>---</p>';
	
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