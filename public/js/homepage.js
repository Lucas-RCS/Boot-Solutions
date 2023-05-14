const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})

if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})

const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
});



// // Seleciona todos os links da barra lateral
// const links = document.querySelectorAll('#sidebar');

// // Itera sobre todos os links e adiciona um ouvinte de evento de clique a cada um
// links.forEach(link => {
//   link.addEventListener('click', function(e) {
//     // Impede o comportamento padrão do navegador de recarregar a página
//     e.preventDefault();
    
//     // Seleciona o identificador do link clicado
//     const id = this.getAttribute('href');
    
//     // Seleciona o elemento HTML correspondente ao identificador
//     const conteudo = document.querySelector(id);
    
//     // Esconde todos os elementos de conteúdo
//     document.querySelectorAll('.conteudo').forEach(elemento => {
//       elemento.style.display = 'none';
//     });
    
//     // Exibe o conteúdo correspondente ao link clicado
//     conteudo.style.display = 'block';
//   });
// });
// // Seleciona o elemento "Home" da barra lateral
// const homeLink = document.querySelector('nav a[href="#home"]');
// // Clica no elemento "Home" para exibir o conteúdo correspondente
// homeLink.click();




// MUDA DE COR AS COISAS
// const colorPicker = document.getElementById('color-picker');
// const elementToColor = document.getElementById('element-to-color');

// colorPicker.addEventListener('input', function() {
//   elementToColor.style.backgroundColor = colorPicker.value;
// 	elementToColor.style.color = colorPicker.value;

// });


