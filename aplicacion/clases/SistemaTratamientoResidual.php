<?php

	require_once('../motor_de_inferencias/phprules/phprules.php');
	require_once('ConjuntoDifuso.php');
	
Class SistemaTratamientoResidual extends Fact
{
	var $aplicar;
	var $nombre;
	 var $costo;
	 var $eficiencia;
 
 
		function __construct()
		{
			
				$this->aplicar=false;
				$this->costo=0;
				$this->nombre='';
				$this->porcentajeEficiencia=0;
				
				
 
		}
		
		function aplicar()
		{
			return $this->aplicar;
		
		}
		
		
		function setCosto($costo)
		 {
				$this->costo=$costo;
		 }
		 
		 function setEficiencia($eficiencia)
		 {
				$this->porcentaje=$eficiencia;
		 }
		
		 function setNombre($nombre)
		 {
				$this->nombre=$nombre;
		 }
		
		
	
	
		function getCosto()
		{
			return $this->costo;	
		
		}
		
		function getNombre()
		{
			return $this->nombre;	
		
		}
		
		function getEficiencia()
		{
			return $this->eficiencia;	
		
		}
		
		
 

}
?>