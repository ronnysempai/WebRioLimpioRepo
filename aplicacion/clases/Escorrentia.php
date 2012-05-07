<?php

	require_once('../motor_de_inferencias/phprules/phprules.php');
	require_once('ConjuntoDifuso.php');
	
Class Escorrentia extends Fact
{
	 var $porcentaje;
	 var $conjuntosDifusos;
 
 
		function __construct()
		{
				$this->porcentaje=0;
				$this->conjuntosDifusos=null;
				
				$escorrentiaLigera=new ConjuntoDifuso();
				
				$escorrentiaLigera->setNombre("ligera");
				$escorrentiaLigera->setValorA(0);
				$escorrentiaLigera->setValorB(0);
				$escorrentiaLigera->setValorC(2.5);
				$escorrentiaLigera->setValorD(3);
				
				$escorrentiaModerada=new ConjuntoDifuso();
				$escorrentiaModerada->setNombre("moderada");
				$escorrentiaModerada->setValorA(2.5);
				$escorrentiaModerada->setValorB(3);
				$escorrentiaModerada->setValorC(5);
				$escorrentiaModerada->setValorD(6);
				
				$escorrentiaSevera=new ConjuntoDifuso();
				$escorrentiaSevera->setNombre("severa");
				$escorrentiaSevera->setValorA(5);
				$escorrentiaSevera->setValorB(6);
				$escorrentiaSevera->setValorC(7.5);
				$escorrentiaSevera->setValorD(8);
				
				$escorrentiaMuySevera=new ConjuntoDifuso();
				$escorrentiaMuySevera->setNombre("muySevera");
				$escorrentiaMuySevera->setValorA(7.5);
				$escorrentiaMuySevera->setValorB(8);
				$escorrentiaMuySevera->setValorC(10);
				$escorrentiaMuySevera->setValorD(10);
				
				$this->conjuntosDifusos[]=$escorrentiaLigera;
				$this->conjuntosDifusos[]=$escorrentiaModerada;
				$this->conjuntosDifusos[]=$escorrentiaSevera;
				$this->conjuntosDifusos[]=$escorrentiaMuySevera;
				
 
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
		
		function setGradoPertenenciaNivel($nivel,$gradoPertenencia)
		{	
				foreach($this->conjuntosDifusos as $conjuntoDifuso)
							{
								if($conjuntoDifuso->getNombre()==$nivel)
								 $conjuntoDifuso->setGradoPertenencia($gradoPertenencia) ;
									
							}
							
							
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