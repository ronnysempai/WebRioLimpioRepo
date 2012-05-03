<?php

	require_once('../motor_de_inferencias/phprules/phprules.php');
	
class Poblacion extends Fact
{
	
	var $idCapa;
	var $masaNitrogenoPromedio;
	var $numeroHabitantes;
	

		function __construct()
		{
				$this->masaNitrogenoPromedio=0;
				
				$this->numeroHabitantes=0;
	
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
		
		
		
		
		
		
		
		

	

}

?>