

	
	
	function inicializacionMenuContextual(id)
	  {
					$('#'+id).contextMenu('myMenu1', {

					bindings: {

					  'editar': function(t) {

						//alert('Trigger was '+t.id+'\nAction was Open');
						cargarFormulario(t.id);
					  },
					  
					  'eliminar': function(t) {

						
						eliminarElemento(''+t.id);

					  }

					}

				  });
	  }