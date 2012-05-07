<?php 

	require_once('../motor_de_inferencias/phprules/phprules.php');

class ConjuntoDifuso extends Fact
{
	
	
	var $nombre;
	var $valorA;
	var $valorB;
	var $valorC;
	var $valorD;
	
	var $gradoPertenencia;
	
	
		function __construct()
		{
				$this->nombre="";
				
				$this->valorA=0;
				$this->valorB=0;
				$this->valorC=0;
				$this->valorD=0;
				
				$this->gradoPertenencia=0;
		}
		
		
		function setNombre($nombre)
		{  
				
				$this->nombre=$nombre;
				
				
		}
		
		
		function setValorA($valorA)
		{
			$this->valorA=$valorA;
		}
		
		
		
		function setValorB($valorB)
		{
			$this->valorB=$valorB;
		}
		
		
		function setValorC($valorC)
		{
			$this->valorC=$valorC;
		}
		
		function setValorD($valorD)
		{
			$this->valorD=$valorD;
		}
		
		
		
		function getValorA()
		{
			return  $this->valorA;
		}
		
		
		function getValorB()
		{
			return  $this->valorB;
		}
		
		
		function getValorC()
		{
			return  $this->valorC;
		}
		
		function getValorD()
		{
			return  $this->valorD;
		}
		
		function getGradoPertenencia()
		{
			return $this->gradoPertenencia;
		}
		
		function setGradoPertenencia($gradoPertenencia)
		{
			$this->gradoPertenencia=$gradoPertenencia;
		}
		
		function calculaGradoPertenencia($valorNoDifuso)
		{
		
			if($this->valorA==$this->valorB)
			if($valorNoDifuso==$this->valorA || $valorNoDifuso==$this->valorB)
				return 1;
			
			
			if($this->valorD==$this->valorC)
			if($valorNoDifuso==$this->valorC || $valorNoDifuso==$this->valorD)
				return 1;
			
			
			if($valorNoDifuso<=$this->valorA)
				return 0;
			else
			if($valorNoDifuso>=$this->valorA && $valorNoDifuso <=$this->valorB)
			{	
				return (  ( $valorNoDifuso- $this->valorA ) / ($this->valorB - $this->valorA) );
			}
			if($valorNoDifuso>=$this->valorB && $valorNoDifuso <=$this->valorC)
				return ( 1);
			else
			if($valorNoDifuso>=$this->valorC && $valorNoDifuso <=$this->valorD)
				return (   ( $this->valorD  - $valorNoDifuso) / ($this->valorD - $this->valorC)    );
			else
				if($valorNoDifuso>=$this->valorD)
					return 0;
			
			
		}
		
		function calculoGradoPertenenciaCortado($valorNoDifuso,$valorPertenenciaCorte)
		{
			$gradoPertenencia=0;
				
				$gradoPertenencia=$this->calculaGradoPertenencia($valorNoDifuso);
		
			if ( $gradoPertenencia  >=$valorPertenenciaCorte )
				return $valorPertenenciaCorte;
			else
			return $gradoPertenencia;
			
		}
		
		
		
		
		function getNombre()
		{
			return $this->nombre;
		
		}


}

?>