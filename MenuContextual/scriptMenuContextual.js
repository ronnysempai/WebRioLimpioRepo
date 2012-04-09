
$(document).ready(function() {


		$('td.dark').contextMenu('myMenu1', {

        bindings: {

          'editar': function(t) {

            //alert('Trigger was '+t.id+'\nAction was Open');
			$( "#dialog-form" ).dialog( "open" );
          },

          'email': function(t) {

            alert('Trigger was '+t.id+'\nAction was Email');

          },

          'save': function(t) {

            alert('Trigger was '+t.id+'\nAction was Save');

          },

          'eliminar': function(t) {

            alert('Trigger was '+t.id+'\nAction was Delete');

          }

        }

      });



$('td.dark2').contextMenu('myMenu2', {
	
      menuStyle: {

        border: '2px solid #000'

      },

      itemStyle: {

        fontFamily : 'verdana',

        /* backgroundColor : '#666', */
		
		backgroundColor:'#DFD5D5',
		
        color: 'black',

        border: 'none',

        padding: '1px'

      },

      itemHoverStyle: {

        color: '#fff',

        backgroundColor: '#0f0',

        border: 'none'

      }

    });
	
	
	});