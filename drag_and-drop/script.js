/*jslint white: true, browser: true, undef: true, nomen: true, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, strict: true, newcap: true, immed: true, maxerr: 14 */
/*global window: false, REDIPS: true */

/* enable strict mode */
"use strict";

var redips_init,		// define redips_init variable
	rd,					// reference to the REDIPS.drag library
	divo,				// reference to the O DIV element
	// methods
	toggle_xo,			// toggle X and O clone elements on the left
	check_board,		// method checks board
	check_line;			// method checks line (row, column or diagonal) for value 3 or -3


// redips initialization
redips_init = function ()
 {
	// set reference to the REDIPS.drag library
	rd = REDIPS.drag;
	// initialization
	rd.init();
	// define border for disabled element (default is dotted)
	rd.border_disabled = 'none';
	// dragged elements can be placed to the empty cells only
	rd.drop_option = 'single';
	// set reference to the O div element (needed in toggle_xo() method)
	
	rd.hover.color_td = '#9BB3DA';
	
	
	
	divo = document.getElementById('o');
	// toggle X and O elements on the left side
	//toggle_xo();
	// declare tasks after element is dropped
	rd.myhandler_dropped = function () 
	{
		var obj = rd.obj,			// current element (cloned element)
			obj_old = rd.obj_old,	// previous element (this is clone element)
			tac = rd.target_cell;	// target cell
		// disable dropped DIV element
		
		var substring_id;
		var tags_a;
		
		rd.enable_drag(false, obj.id);
		
		//alert(obj.id);
		
		
		
		
		
		obj.setAttribute('style','border:1px blue solid; ');
		
		if(obj.id!=null)
	   {	substring_id=obj.id.substring( (obj.id.length-1) -1 )
			
			if( substring_id.charAt(0)=='c')
			{	
				
				tags_a=obj.getElementsByTagName('a');
				
				if(tags_a!=null)
				tags_a[0].style.cursor='pointer';
				
			}
		}
		
		$( "#name" ).val(obj.id);
		$( "#dialog-form" ).dialog( "open" );
		
		
	};
	
	rd.myhandler_deleted = function () {
	
		alert('deleted ...')
		
	};
	
};

function test()
{
	
}

// add onload event listener
if (window.addEventListener) {

	window.addEventListener('load', redips_init, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redips_init);
}