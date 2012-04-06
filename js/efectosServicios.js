// JavaScript Document


var pruebas=true;

var NIVEL=1;
var pos_actual=0;

function moverCapa(id_capa,n)
{
   var y=0;
   

	pos_actual=convert(document.getElementById(id_capa).style.top);

	
	moverCapa2(id_capa,n);	
	//NIVEL=n;
}

function convert(pxs)
{ 
	var p_px=pxs.indexOf('px');
	
	var val=0;
	if(p_px==-1)
	p_px=0;
	
	if(pxs.slice(0,p_px)[0]== '-'  )
	{
	val= -1*parseInt(pxs.slice(1,p_px));
	}
	else
	if(pxs.slice(0,p_px)[0]== '+'  )
	{
	val= parseInt(pxs.slice(1,p_px));
	}
	else
	val= parseInt('0'+pxs.slice(0,p_px));
	
	//val =0 + pxs.slice(0,p_px);

	return val;
}


function moverCapa2(id_capa,n)
{	var limite=0;
	
	var operador=1;	
	var y=0;


limite=((370))+40;

y=pos_actual+limite;


		
if(n==1)
{
y=40;

}
else
if(n==2)
{

y=((370)*-1)+40;

}
else
if(n==3)
{
y=2*((370)*-1)+30;

}
else
if(n==4)
{y=3*((370)*-1)+20;

}


 if(n==1 && NIVEL==4 )
 {

	if(pos_actual>(pos_actual-320)	)
			{ 
				pos_actual=pos_actual+(5);

				sy=pos_actual+'px';
				//alert('siii '+pos_actual);																		
				//alert(sy);
				document.getElementById(id_capa).style.top=sy;
				
				setTimeout('moverCapa2("'+id_capa+'","'+n+'")',2);				
			}

 }


 if(n==4 && NIVEL==1 )
 {

	if(pos_actual<(370)	)
			{ 
				pos_actual=pos_actual-(5);

				sy=pos_actual+'px';
				//alert('siii '+pos_actual);																		
				//alert(sy);
				document.getElementById(id_capa).style.top=sy;
				
				setTimeout('moverCapa2("'+id_capa+'","'+n+'")',2);				
			}
			

 }                               


if(n>NIVEL)
{


operador=-1;

			if(pos_actual>y)	
			{
				pos_actual=pos_actual+(operador*5);
				
				sy=pos_actual+'px';
																		
				//alert(sy);
				document.getElementById(id_capa).style.top=sy;
				
				setTimeout('moverCapa2("'+id_capa+'","'+n+'")',2);				
			}
			else
				NIVEL=n;
}
else
{
operador=1;
//alert(' pA'+pos_actual+' y '+y);
			if (pos_actual<y)
			{		
					pos_actual=pos_actual+(operador*5);
					
					sy=pos_actual+'px';
						
					//alert('movimiento '+sy);
					document.getElementById(id_capa).style.top=sy;
						
					setTimeout('moverCapa2("'+id_capa+'","'+n+'")',1);				
			}
			else
				NIVEL=n;

}

//



}
