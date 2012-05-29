<?php 

require_once('../motor_de_inferencias/phprules/phprules.php');

class PracticaAgricola extends Fact
{
	var $aplicar;
	var $nombre;
	var $costo;
	var $distanciaCurvaNivel;
	var $descripcion;
	var $eficiencia;
	
	
		function __construct()
		{
				$this->aplicar=false;
				$this->nombre="";
				$this->costo=0;
				
				$this->distanciaCurvaNivel='';
				
				$this->distanciaCurvaNivel=0;
				$this->eficiencia=0;
		}
		
		function aplicar()
		{
			return $this->aplicar;
		
		}
		
		function setNombre($nombre)
		{  
				
				$this->nombre=$nombre;
				
				
		}
		
		function setCosto($costo)
		{  
				
				$this->costo=$costo;
					
		}
		
		
		function setDistanciaCurvaNivel($distanciaCurvaNivel)
		{
		
			$this->distanciaCurvaNivel=$distanciaCurvaNivel;
		}
		
		
		
		function getNombre()
		{
			return $this->nombre;
		
		}
		
		function getCosto()
		{
			return $this->costo;
		
		}
		
		
	
		function getDistanciaCurvaNivel()
		{
		
			return $this->distanciaCurvaNivel;
		}
		
		
		

}


	
?>
