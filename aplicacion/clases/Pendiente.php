<?php

	require_once('../motor_de_inferencias/phprules/phprules.php');
	require_once('ConjuntoDifuso.php');
	
Class Pendiente extends Fact
{
	 var $porcentaje;
	 var $conjuntosDifusos;
 
 
		function __construct()
		{
				$this->porcentaje=0;
				$this->conjuntosDifusos=null;
 
		}
 
		 function setPorcentaje($porcentaje)
		 {
				$this->porcentaje=$porcentaje;
		 }
		
	
		function setConjuntosDifusos($conjuntosDifusos)
		{
			$this->conjuntosDifusos=$conjuntosDifusos;
		}
		
		function getPorcentaje()
		{
			return $this->porcentaje;	
		
		}
		
		
 

}