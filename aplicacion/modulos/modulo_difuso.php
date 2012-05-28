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
	
	function ejecutaModuloDifuso($obj)
	{
	
				if(!empty($obj))
				if(strrpos($obj->idCapa, "agricola"))
				{						
										
										$wm = new WorkingMemory();
										/*Agergacion de objeto a memoria de trabajo*/
										$wm->insert($obj);
										/*****/
										$rr = new RuleReader();
										/*leer archivo de reglas*/
										$rs = new RuleSession($rr->parseFile("../base_de_conocimiento/reglas_difusas.srl"), $wm);
										/******/
										$rs->verbosity = 1;
										/*correr reglas para este objeto*/
										$rs->fireAll();
										/**/
										
										$obj->escorrentia->defuzificarEscorrentia();
				}
	}
	
		
	
?>