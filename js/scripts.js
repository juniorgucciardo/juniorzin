/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

window.addEventListener("load", alternarImagens);


function alternarImagens() {
    // Seleciona as duas imagens
    const img1 = document.getElementById("avatar");
    const img2 = document.getElementById("avatar2");
  
    // Define a variável que controla a imagem atual
    let imgAtual = img1;
  
    // Função para alternar as imagens
    function mostrarEsconder() {
      // Esconde a imagem atual
      imgAtual.style.display = "none";
  
      // Se a imagem atual for a primeira, mostra a segunda
      if (imgAtual === img1) {
        imgAtual = img2;
      } else {
        imgAtual = img1;
      }
  
      // Mostra a nova imagem atual
      imgAtual.style.display = "block";
    }
  
    // Mostra a imagem inicial
    img1.style.display = "block";
    img2.style.display = "none";
  
    // Chama a função para alternar as imagens a cada 2 segundos
    setInterval(mostrarEsconder, 2000);
  }

  $('.carousel-itens-header').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768, // Largura máxima da tela para aplicar a configuração
        settings: {
          slidesToShow: 3, // Número de slides a serem exibidos
          slidesToScroll: 3 // Número de slides a serem rolados por vez
        }
      }
    ]
  });

  