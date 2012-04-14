

	
	
	function inicializacionMenuContextual(id)
	  {
					$('#'+id).contextMenu('myMenu1', {

					bindings: {

					  'editar': function(t) {

						//alert('Trigger was '+t.id+'\nAction was Open');
						cargarFormulario(t.id);
					  },

					  'email': function(t) 
					  {

						alert('Trigger was '+t.id+'\nAction was Email');

					  },

					  'save': function(t) {

						alert('Trigger was '+t.id+'\nAction was Save');

					  },

					  'eliminar': function(t) {

						
						eliminarElemento(''+t.id);

					  }

					}

				  });
	  }