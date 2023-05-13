// Função para animação de scroll suave
function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;
  
	function animation(currentTime) {
	  if (startTime === null) startTime = currentTime;
	  var timeElapsed = currentTime - startTime;
	  var run = ease(timeElapsed, startPosition, distance, duration);
	  window.scrollTo(0, run);
	  if (timeElapsed < duration) requestAnimationFrame(animation);
	}
  
	function ease(t, b, c, d) {
	  t /= d / 2;
	  if (t < 1) return c / 2 * t * t + b;
	  t--;
	  return -c / 2 * (t * (t - 2) - 1) + b;
	}
  
	requestAnimationFrame(animation);
  }
  
  // Selecionar todos os links de navegação
  var links = document.querySelectorAll('nav a');
  
  // Adicionar evento de clique para cada link
  links.forEach(function(link) {
	link.addEventListener('click', function(e) {
	  e.preventDefault();
	  var href = this.getAttribute('href');
	  if (href.startsWith('#')) {
		smoothScroll(href, 1000);
	  } else {
		window.location.href = href;
	  }
	});
  });
