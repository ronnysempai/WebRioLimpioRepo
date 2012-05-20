function initSlider() 
{
  document.getElementById('one').onchange = function() {
      document.getElementById('uno').innerHTML = this.value;
  };
  document.getElementById('one').onchange();
  
  /*document.getElementById('two').onchange = function() {
      document.getElementById('dos').innerHTML = this.value;
  };
  
  document.getElementById('two').onchange();
  document.getElementById('mmm').innerHTML =
    ['min: ' + document.getElementById('two').min,
     'max: ' + document.getElementById('two').max,
     'step: ' + document.getElementById('two').step].join(', ');
	 */
}

initSlider();