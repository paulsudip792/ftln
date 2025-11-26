document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });

  const swiperSec = new Swiper(".second-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".coach-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });
  // Add this JavaScript to your page

  function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // Intersection Observer to detect when element is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const numberElement = entry.target.querySelector(".counter-number");
        if (numberElement) {
          const targetValue = parseInt(numberElement.dataset.target);

          if (entry.isIntersecting) {
            // Reset to 0 and start animation when entering view
            numberElement.textContent = "0";
            animateCounter(numberElement, targetValue);
          } else {
            // Optional: Reset to 0 when leaving view
            numberElement.textContent = "0";
          }
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 50% of element is visible
    }
  );

  // Observe your counter element(s)
  const counterDivs = document.querySelectorAll(".number");
  counterDivs.forEach((counterDiv) => {
    observer.observe(counterDiv);
  });
  const swiperAbout = new Swiper(".about-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".about-pagination",
      clickable: true,
    },
  });
  let swiper5 = new Swiper(".filter-btn-swpr", {
    // slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 0,
    // breakpoints: {
    //   1250: {
    //     slidesPerView: 3,
    //   },

    //   768: {
    //     slidesPerView: 2,
    //   },
    //   320: {
    //     slidesPerView: 1,
    //   },
    // },
  });

  const sortingButtons = document.querySelectorAll(".sorting-button");

  sortingButtons.forEach((btn) => {
    const menu = btn.querySelector(".dropdown-sorted-menu");

    // Only add listener if menu exists
    if (menu) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent event bubbling
        menu.classList.toggle("show-sorted-menu");
      });
    }
  });

  // Optional: close menus when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-sorted-menu").forEach((menu) => {
      menu.classList.remove("show-sorted-menu");
    });
  });

  //It also supports NodeList
  VanillaTilt.init(document.querySelectorAll(".transform-img"));
  // Isotope
  var elem = document.querySelector(".grid");
  var iso = new Isotope(elem, {
    itemSelector: ".element-card",
    layoutMode: "fitRows",
  });

  document.querySelectorAll(".button-slider").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterValue = btn.getAttribute("data-filter");
      iso.arrange({ filter: filterValue });
      btn.classList.toggle("active-btn");
    });
  });
  const cursor = document.querySelector(".cursor");
  let mouseX = 0;
  let mouseY = 0;
  let clientX = 0;
  let clientY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  function MouseMove() {
    clientX += (mouseX - clientX) * 0.05;
    clientY += (mouseY - clientY) * 0.05;

    cursor.style.top = clientY + "px";
    cursor.style.left = clientX + "px";

    requestAnimationFrame(MouseMove);
  }
  MouseMove();
});
