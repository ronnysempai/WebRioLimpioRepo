/*Prueba demo modal form 
			no deberi hacer esto aaa anyway  probando se aprende*/
			
			///-----------
			
							$(function() {
						// a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
						$( "#dialog:ui-dialog" ).dialog( "destroy" );
						
						var name = $( "#name" ),
							email = $( "#email" ),
							password = $( "#password" ),
							allFields = $( [] ).add( name ).add( email ).add( password ),
							tips = $( ".validateTips" );

						/* function updateTips( t ) {
							tips
								.text( t )
								.addClass( "ui-state-highlight" );
							setTimeout(function() {
								tips.removeClass( "ui-state-highlight", 1500 );
							}, 500 );
						} */

						function checkLength( o, n, min, max ) {
							if ( o.val().length > max || o.val().length < min ) {
								o.addClass( "ui-state-error" );
								updateTips( "Length of " + n + " must be between " +
									min + " and " + max + "." );
								return false;
							} else {
								return true;
							}
						}

						function checkRegexp( o, regexp, n ) {
							if ( !( regexp.test( o.val() ) ) ) {
								o.addClass( "ui-state-error" );
								updateTips( n );
								return false;
							} else {
								return true;
							}
						}
						
						$( "#dialog-form" ).dialog({
							autoOpen: false,
							height: 300,
							width: 350,
							modal: true,
							
							buttons: {
								"Aceptar": function() {
									var bValid = true;
									
									
								},
								"Cancelar": function() {
									$( this ).dialog( "close" );
								}
							},
							close: function() {
								allFields.val( "" ).removeClass( "ui-state-error" );
							}
						});
				
							
							$( "#dialog-form " ).css("background","#39f");
							
							$( "#dialog-form label" ).css("color","green");
							
							$( "#dialog-form label" ).css("font-weight","bold");
							
							$( "#dialog-form button" ).css("color","green");
							
							$( "#ui-dialog-title-dialog-form" ).css("color","green");
							
							
							
						$( "#create-user" )
							.button()
							.click(function() {
								$( "#dialog-form" ).dialog( "open" );
							});
					});
			
			
			/* fin prueba */