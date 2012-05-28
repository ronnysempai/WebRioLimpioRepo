<?php

	require_once('../motor_de_inferencias/phprules/phprules.php');
	require_once('ConjuntoDifuso.php');
	
Class SistemaTratamientoResidual extends Fact
{
	 var $nombre;
	 var $costo;
	 var $porcentajeEficiencia;
 
 
		function __construct()
		{
			
				
				$this->costoAproximado=0;
				$this->nombre='';
				$this->porcentajeEficiencia=0;
				
				
 
		}
		
		
		function setCostoAproximado($costoAproximado)
		 {
				$this->costoAproximadoe=$costoAproximado;
		 }
		 
		 function setPorcentajeEficiencia($porcentajeEficiencia)
		 {
				$this->porcentajeEficiencia=$porcentajeEficiencia;
		 }
		
		 function setNombre($nombre)
		 {
				$this->nombre=$nombre;
		 }
		
		
	
	
		function getCostoAproximado()
		{
			return $this->costoAproximado;	
		
		}
		
		function getNombre()
		{
			return $this->nombre;	
		
		}
		
		function getPorcentajeEficiencia()
		{
			return $this->porcentajeEficiencia;	
		
		}
		
		
 

}
?>