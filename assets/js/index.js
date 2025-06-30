window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let header = document.querySelector(".main-header");

    if (window.scrollY > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".nav-item.dropdown");

    dropdown.addEventListener("mouseover", function () {
        let menu = this.querySelector(".dropdown-menu");
        menu.classList.add("show");
    });

    dropdown.addEventListener("mouseleave", function () {
        let menu = this.querySelector(".dropdown-menu");
        menu.classList.remove("show");
    });

    dropdown.querySelector(".dropdown-toggle").addEventListener("click", function (e) {
        e.preventDefault();
        let menu = dropdown.querySelector(".dropdown-menu");
        menu.classList.toggle("show");
    });
});



$(document).ready(function () {
    $('.testimonial').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            991: {
                items: 2,

            },
            1024:{
                items: 3,

            },
            
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.parentElement.classList.add("active");
    }
  });
});
