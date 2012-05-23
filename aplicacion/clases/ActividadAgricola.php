<?php
	
	require_once('../motor_de_inferencias/phprules/phprules.php');
	
class ActividadAgricola extends Fact
{
	var $idCapa;
	var $masaNitrogenoPromedio;
	var $cargaNitrogenoAportada;
	var $cultivo;
	var $numeroHectareas;
	var $estadoClima;
	var $pendiente;
	var $escorrentia;
	var $practicaAgricola;
	
	
		function __construct()
		{
				$this->masaNitrogenoPromedio=0;
				 $this->cargaNitrogenoAportada=0;
				
				$this->numeroHectareas=0;
				$this->estadoClima=0;
				$this->cultivo=null;
				$this->pendiente=null;
				$this->escorrentia=null;
				$this->practicaAgricola=null;
				
		}
		
		
		function getIdCapa()
		{  
				 return $this->idCapa;
				
				
		}
		
		function getMasaNitrogenoPromedio()
		{  
				 return $this->masaNitrogenoPromedio;
				
				
		}
		
		/**/
		function getCargaNitrogenoAportada()
		{   
				 return  $this->cargaNitrogenoAportada;
				
				
		}
		
		function getNumeroHectareas()
		{  
				 return $this->numeroHectareas;
				
				
		}
		
		function getEstadoClima()
		{  
				 return $this->estadoClima;
				
				
		}
		
		
		function getCultivo()
		{  
				 return $this->cultivo;
				
				
		}
		
		
		function getPendiente()
		{  
				 return $this->pendiente;
				
				
		}
		
		
		function getEscorrentia()
		{  
				 return $this->escorrentia;
				
				
		}
		
		function getPracticaAgricola()
		{  
				 return $this->practicaAgricola;
				
				
		}
		
		
		
		function setIdCapa($idCapa)
		{
			$this->idCapa=$idCapa;
		
		}
		
		function setCargaNitrogenoAportada($cargaNitrogenoAportada)
		{
			$this->cargaNitrogenoAportada=$cargaNitrogenoAportada;
		}
		
		function setEstadoClima($estadoClima)
		{
			$this->estadoClima=$estadoClima;
		
		}
		
		
		function setNumeroHectareas($numeroHectareas)
		{
			$this->numeroHectareas=$numeroHectareas;
		
		}
		
		
		

}

?>