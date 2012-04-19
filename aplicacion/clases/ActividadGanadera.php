<?php
	
	require_once('../motor_de_inferencias/phprules/phprules.php');

class ActividadGanadera extends Fact
{

	var $masaNitrogenoPromedio;
	var $numeroAnimales;
	

		function __construct()
		{
				$this->masaNitrogenoPromedio=0;
				
				$this->numeroAnimales=0;
	
		}
	
		
		
		function setMasaNitrogenoPromedio($masaNitrogeno)
		{  
				$this->masaNitrogenoPromedio=$masaNitrogeno;
				
				
		}
		
		
		function setNumeroAnimales($numeroAnimales)
		{  
				$this->numeroAnimales=$numeroAnimales;
				
				
		}
		
			
		
		function getNumeroAnimales()
		{  
				 return $this->numeroAnimales;
				
				
		}
		
		
		function getMasaNitrogenoPromedio()
		{  
				 return $this->masaNitrogenoPromedio;
				
				
		}
		
		
		
		
		
		
		
		function __destruct()
		{
			echo "<br>destruido: " . $this;
		}

	

}

?>