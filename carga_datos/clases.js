/* codigo javascritp pasar datos de formulario interfaz al backend php  */

function ActividadAgricola(cultivo,numeroHectareas,estadoClima,pendiente)
 {
		
		var idCapa;
		var  cultivo;
		var numeroHectareas;
		var  estadoClima;
		var  pendiente;
		var aplicarPractica;
		
		
		 this.getIdCapa = function() {
		return this.idCapa;
		};
		 
		this.getCultivo = function() {
		return this.cultivo;
		};

		this.getNumeroHectareas = function() {
		return this.numeroHectareas;
		};
		 
		this.getEstadoClima= function() {
		return this.estadoClima;
		};
		 
		 this.getPendiente= function() {
		return this.pendiente;
		};
		 
		 this.getAplicarPractica= function() {
		return this.aplicarPractica;
		};
		 
		 
		 this.setIdCapa = function(idCapa) {
		this.idCapa = idCapa;
		};
		 
		this.setCultivo = function(cultivo) {
		this.cultivo = cultivo;
		};
		 
		this.setNumeroHectareas = function(numeroHectareas) {
		this.numeroHectareas = numeroHectareas;
		};
		 
		this.setEstadoClima = function(estadoClima) {
		this.estadoClima = estadoClima;
		}
		
		
		this.setPendiente = function(pendiente) {
		this.pendiente = pendiente;
		}
		
		this.setAplicarPractica = function(aplicar) {
			this.aplicarPractica = aplicar;
		}
		
}

function ActividadGanadera(numeroAnimales)
 {
		
		var idCapa;
		 var  numeroAnimales;
		 
		 
		 this.getIdCapa = function() {
		return this.idCapa;
		};
		 
		 
		  this.setIdCapa = function(idCapa) {
		this.idCapa = idCapa;
		};
		 
		 
		this.getNumeroAnimales = function() {
		return this.numeroAnimales;
		};

		
		 
		this.setNumeroAnimales = function(numeroAnimales) 
		{
			this.numeroAnimales = numeroAnimales;
		};
		 
		
		
}


function Poblacion(numeroHabitantes)
 {
		var idCapa;
		var  numeroHabitantes;
		var aplicarMetodo;
		  
		 this.getIdCapa = function() {
		return this.idCapa;
		};
		 
		 
		  this.setIdCapa = function(idCapa) {
		this.idCapa = idCapa;
		};
		 
		this.getNumeroHabitantes = function() {
		return this.numeroHabitantes;
		};
		
		this.getAplicarMetodo = function() {
		return this.aplicarMetodo;
		};
		
		 
		this.setNumeroHabitantes = function(numeroHabitantes) 
		{
			this.numeroHabitantes = numeroHabitantes;
		};
		 
		 this.setAplicarMetodo = function(aplicar) 
		{
			this.aplicarMetodo = aplicar;
		};
		
}


function Rio()
 {
		var idCapa;
		 var  caudal;
		 var cargaContaminante;
		 var concentracionContaminante;
		 
		  this.getIdCapa = function() {
		return this.idCapa;
		};
		 
		 
		  this.setIdCapa = function(idCapa) {
		this.idCapa = idCapa;
		};
		 
		
		 this.getCaudal = function() {
		return this.caudal;
		};
		 
		 
		  this.setCaudal = function(caudal) {
		this.caudal = caudal;
		};
		 
		 
		  this.getCargaContaminante = function() {
		return this.cargaContaminante;
		};
		 
		 
		  this.setCargaContaminante = function(cargaContaminante) {
		this.cargaContaminante= cargaContaminante;
		};
		 
		 
		 this.getConcentracionContaminante= function() {
		return this.concentracionContaminante;
		};
		 
		 
		  this.setConcentracionContaminante = function(concentracionContaminante) {
		this.concentracionContaminante= concentracionContaminante;
		};
		
}




