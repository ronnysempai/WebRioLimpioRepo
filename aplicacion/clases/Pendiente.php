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
				
				$pendinteSuave=new ConjuntoDifuso();				
				$pendinteSuave->setNombre("suave");
				$pendinteSuave->setValorA(0);
				$pendinteSuave->setValorB(0);
				$pendinteSuave->setValorC(4);
				$pendinteSuave->setValorD(5);
				
				$pendinteMedia=new ConjuntoDifuso();				
				$pendinteMedia->setNombre("media");
				$pendinteMedia->setValorA(4);
				$pendinteMedia->setValorB(5);
				$pendinteMedia->setValorC(20);
				$pendinteMedia->setValorD(21);
				
				$pendinteAlta=new ConjuntoDifuso();				
				$pendinteAlta->setNombre("alta");
				$pendinteAlta->setValorA(20);
				$pendinteAlta->setValorB(21);
				$pendinteAlta->setValorC(50);
				$pendinteAlta->setValorD(51);
				
				$pendintePronunciada=new ConjuntoDifuso();				
				$pendintePronunciada->setNombre("pronunciada");
				$pendintePronunciada->setValorA(50);
				$pendintePronunciada->setValorB(51);
				$pendintePronunciada->setValorC(100);
				$pendintePronunciada->setValorD(100);
				
				$this->conjuntosDifusos[]=$pendinteSuave;
				$this->conjuntosDifusos[]=$pendinteMedia;
				$this->conjuntosDifusos[]=$pendinteAlta;
				$this->conjuntosDifusos[]=$pendintePronunciada;
				
 
		}
		
		function esNivel($nivel)
		{	
				foreach($this->conjuntosDifusos as $conjuntoDifuso)
							{
								if( $conjuntoDifuso->calculaGradoPertenencia($this->porcentaje) >0  )
								{
									if($conjuntoDifuso->getNombre()==$nivel)
									return true;
								}
							}
							
							return false;
		}
		
		function getGradoPertenenciaNivel($nivel)
		{	
				foreach($this->conjuntosDifusos as $conjuntoDifuso)
							{
								if($conjuntoDifuso->getNombre()==$nivel)
								 return $conjuntoDifuso->calculaGradoPertenencia($this->porcentaje) ;
									
							}
							
							return 0;
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
?>