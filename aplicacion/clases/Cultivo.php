<?php 

		require_once('../motor_de_inferencias/phprules/phprules.php');

class Cultivo extends Fact
{
		var $nombre;
		var $ciclo;
	

		function __construct()
		{
				$this->nombre="";
				
				$this->ciclo="";
	
		}
	
		
		
		function setNombre($nombre)
		{  
				
				$this->nombre=$nombre;
				
				
		}
		
		
		function setCiclo($ciclo)
		{  
				
				$this->ciclo=$ciclo;
				
				
		}
		
		function getNombre()
		{
			return $this->nombre;
		
		}
		
		
		function getCiclo()
		{
			return $this->ciclo;
		
		}
		
		
		

}




?>