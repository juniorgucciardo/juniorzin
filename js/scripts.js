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
  const img1 = document.getElementById("avatar");
  const img2 = document.getElementById("avatar2");
  let imgAtual = img1;
  img2.style.display = "none";

  function toggleImagens() {
    const proximaImg = (imgAtual === img1) ? img2 : img1;

    imgAtual.classList.add('animate__animated', 'animate__flipOutY');
    setTimeout(function() {
      imgAtual.style.display = "none";
      imgAtual.classList.remove('animate__animated', 'animate__flipOutY');
      proximaImg.style.display = "block";
      proximaImg.classList.add('animate__animated', 'animate__flipInY');
      imgAtual = proximaImg;
    }, 1000);
  }

  img1.addEventListener('click', toggleImagens);
  img2.addEventListener('click', toggleImagens);
}

  $('.carousel-itens-header').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 768, // Largura máxima da tela para aplicar a configuração
        settings: {
          slidesToShow: 3, // Número de slides a serem exibidos
          slidesToScroll: 6 // Número de slides a serem rolados por vez
        }
      }
    ]
  });


  $('.story-slider').slick({
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll by one slide
    arrows: true, // Add navigation arrows
    dots: true, // Add pagination dots
    autoplay: true, // Enable autoplay (optional)
    autoplaySpeed: 5000 // Autoplay duration in milliseconds (optional)
  });

  