function initSlider() 
{
  document.getElementById('one').onchange = function() {
      document.getElementById('uno').innerHTML = this.value;
  };
  document.getElementById('one').onchange();
  
  
	 
}

initSlider();