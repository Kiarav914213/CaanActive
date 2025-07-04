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


$(".service_crousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<i class="fas fa-long-arrow-alt-left"></i>',
    '<i class="fas fa-long-arrow-alt-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});





document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const currentPath = window.location.pathname.replace(/\/$/, "").toLowerCase();

  navLinks.forEach(link => {
    // 💡 Skip if href is "#" or empty
    if (!link.href || link.getAttribute("href") === "#") return;

    // Clean previous active
    link.classList.remove("active");
    if (link.parentElement) {
      link.parentElement.classList.remove("active");
    }

    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, "").toLowerCase();

    if (linkPath === currentPath) {
      link.classList.add("active");
      if (link.parentElement) {
        link.parentElement.classList.add("active");
      }
    }
  });
});
