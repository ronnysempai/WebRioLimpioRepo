<?php

	require_once('../motor_de_inferencias/phprules/phprules.php');
	require_once('SistemaTratamientoResidual.php');
class Poblacion extends Fact
{
	
	var $idCapa;
	var $masaNitrogenoPromedio;
	var $numeroHabitantes;
	var $sistemaTratamientoResidual;
	

		function __construct()
		{
				$this->masaNitrogenoPromedio=0;
				
				$this->numeroHabitantes=0;
				
				//$this->sistemaTratamientoResidual=new SistemaTratamientoResidual();
				
		}
	
	
	function setIdCapa($idCapa)
		{  
				$this->idCapa=$idCapa;
				
				
		}
		
		
		
		function setMasaNitrogenoPromedio($masaNitrogeno)
		{  
				$this->masaNitrogenoPromedio=$masaNitrogeno;
				
				
		}
		
		
		function setNumeroHabitantes($numeroHabitantes)
		{  
				$this->numeroHabitantes=$numeroHabitantes;
				
				
		}
		
		function setSistemaTratamientoResidual($sistemaTratamientoResidual)
		{  
				$this->sistemaTratamientoResidual=$sistemaTratamientoResidual;
				
				
		}
			
		function getIdCapa()
		{  
				return $this->idCapa;
				
				
		}
		
		function getNumeroHabitantes()
		{  
				 return $this->numeroHabitantes;
				
				
		}
		
		
		function getMasaNitrogenoPromedio()
		{  
				 return $this->masaNitrogenoPromedio;
				
				
		}
		
		function getSistemaTratamientoResidual()
		{  
		
				 return $this->sistemaTratamientoResidual;
				
				
		}
		
		
		
		
		
		
		

	

}

?>