<?php
	
	require_once('../motor_de_inferencias/phprules/phprules.php');
	require_once('../clases/Pendiente.php');
	
	$pendiente= new Pendiente();
	
	$pendiente->setPorcentaje(20);
	
	$pendiente->setConjuntosDifusos(array(1,2,3));
	
	$wm = new WorkingMemory();
	//$objA=new A(1,3);
	//$wm->insert($objA);
	
	
	$wm->insert($pendiente);
	
	 
	$rr = new RuleReader();
	//$rs = new RuleSession($rr->parseFile("test/rules/advanced_logic.srl"), $wm);
	$rs = new RuleSession($rr->parseFile("../base_de_conocimiento/reglas.srl"), $wm);
	
	$rs->verbosity = 1;
	$rs->fireAll();
	
	
?>