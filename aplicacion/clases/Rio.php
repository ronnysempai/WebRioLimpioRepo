<?php
	
	require_once('../motor_de_inferencias/phprules/phprules.php');

class Rio extends Fact
{
	
	var $idCapa;
	var $caudal;
	var $cargaContaminante;
	var $concentracionContaminante;

		function __construct()
		{
		
				$this->caudal=0;
				$this->cargaContaminante;
				$this->concentracionContaminante=0;
				
		}
	
	
	function setIdCapa($idCapa)
		{  
				$this->idCapa=$idCapa;
				
				
		}
		
		
		
		function setCaudal($caudal)
		{  
				$this->caudal=$caudal;
				
				
		}
		
		
	
		
			
		function getIdCapa()
		{  
				return $this->idCapa;
				
				
		}
		
		function getCaudal()
		{  
				 return $this->caudal;
				
				
		}
		
		
		
		
	

}

?>