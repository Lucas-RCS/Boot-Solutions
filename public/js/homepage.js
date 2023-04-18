// BARRA LATERAL

// Seleciona todos os links da barra lateral
const links = document.querySelectorAll('nav a');

// Itera sobre todos os links e adiciona um ouvinte de evento de clique a cada um
links.forEach(link => {
  link.addEventListener('click', function(e) {
    // Impede o comportamento padrão do navegador de recarregar a página
    e.preventDefault();
    
    // Seleciona o identificador do link clicado
    const id = this.getAttribute('href');
    
    // Seleciona o elemento HTML correspondente ao identificador
    const conteudo = document.querySelector(id);
    
    // Esconde todos os elementos de conteúdo
    document.querySelectorAll('.conteudo').forEach(elemento => {
      elemento.style.display = 'none';
    });
    
    // Exibe o conteúdo correspondente ao link clicado
    conteudo.style.display = 'block';
  });
});
// Seleciona o elemento "Home" da barra lateral
const homeLink = document.querySelector('nav a[href="#home"]');
// Clica no elemento "Home" para exibir o conteúdo correspondente
homeLink.click();
