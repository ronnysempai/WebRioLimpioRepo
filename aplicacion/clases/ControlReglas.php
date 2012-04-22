<?php 
	
	require_once('../motor_de_inferencias/phprules/phprules.php');
	
class ControlReglas extends Fact
	{
	 	var $corrida;
	 	
		
	 	
	 	function __construct() {
	 		$this->corrida = 0;
	 		
			
			
			
	 	}
	 	
	 	function getParaif() {
	 		return 'hi';
	 	}
	}
	?>