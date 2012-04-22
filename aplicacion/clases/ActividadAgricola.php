<?php
	
	require_once('../motor_de_inferencias/phprules/phprules.php');
	
class ActividadAgricola extends Fact
{
	var $masaNitrogenoPromedio;
	var $cultivo;
	var $numerohectareas;
	var $estadoClima;
	var $pendiente;
	var $escorrentia;
	var $practicaAgricola;
	
	
		function __construct()
		{
				$this->masaNitrogenoPromedio=0;
				
				$this->numerohectareas=0;
				$this->estadoClima=0;
				$this->cultivo=null;
				$this->pendiente=null;
				$this->escorrentia=null;
				$this->practicaAgricola=null;
				
		}
		
		
		
		function setEstadoClima($estadoClima)
		{
			$this->estadoClima=$estadoClima;
		
		}
		
		

}

?>