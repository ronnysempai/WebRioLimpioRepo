<?php
	
	require_once('../motor_de_inferencias/phprules/phprules.php');

class Rio extends Fact
{
	
	
	var $caudal;
	var $cargaContaminante;
	var $concentracionContaminante;

		function __construct()
		{
		
				$this->caudal=0;
				$this->cargaContaminante=0;
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
		
		function setCarga($carga)
		{
			
			
			$this->cargaContaminante==$carga;
			
		}
		
		function sumaCarga($cargaAnadida)
		{
			$this->cargaContaminante=$this->cargaContaminante+$cargaAnadida;
		}
		
		function calculaConcentracion()
		{
		
			$numero_decimales=6;
		//echo '>'.$this->cargaContaminante * (1 / 31556 926);
					//	(  mg/año )		*						( año / segundos)	
				
			$carga_mgXsegundos=  ( $this->cargaContaminante * ( 1/31556926)  );
			$caudal_litrosXsegundos=($this->caudal * 1000);
			
			$concentracion=$carga_mgXsegundos/$caudal_litrosXsegundos;
			
			
			$concentracion=number_format($concentracion,$numero_decimales);
			
			 $this->concentracionContaminante=$concentracion;
			 
		}
		
		function getConcentracionContaminante()
		{
				return $this->concentracionContaminante;
		}
		
		
		
	
		
			
		function getIdCapa()
		{  
				return $this->idCapa;
				
				
		}
		
		function getCarga()
		{  
				return $this->cargaContaminante;
				
				
		}
		
		
		function getCaudal()
		{  
				 return $this->caudal;
				
				
		}
		
		
		
		
	

}

?>