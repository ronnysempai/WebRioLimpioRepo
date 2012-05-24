<?php 

require_once('../motor_de_inferencias/phprules/phprules.php');

class PracticaAgricola extends Fact
{
	var $nombre;
	var $distanciaCurvaNivel;
	var $descripcion;
	
	
		function __construct()
		{
				$this->nombre="";
				
				$this->distanciaCurvaNivel='';
				
				$this->distanciaCurvaNivel=0;
	
		}

		
		function setNombre($nombre)
		{  
				
				$this->nombre=$nombre;
				
				
		}
		
		
		function setDistanciaCurvaNivel($distanciaCurvaNivel)
		{
		
			$this->distanciaCurvaNivel=$distanciaCurvaNivel;
		}
	
		
		function getNombre()
		{
			return $this->nombre;
		
		}
		
		
	
		function getDistanciaCurvaNivel()
		{
		
			return $this->distanciaCurvaNivel;
		}
		
		
		

}


	
?>
