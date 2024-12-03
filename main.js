document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("indicators-carousel");
    const items = carousel.querySelectorAll("[data-carousel-item]");
    const indicators = carousel.querySelectorAll("[data-carousel-slide-to]");
    let currentIndex = 0;
  
    function updateCarousel(index) {
      items.forEach((item, i) => {
        item.classList.toggle("hidden", i !== index);
        item.setAttribute("data-carousel-item", i === index ? "active" : "");
      });
  
      indicators.forEach((indicator, i) => {
        indicator.setAttribute("aria-current", i === index ? "true" : "false");
      });
    }
  
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel(currentIndex);
    }
  
    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel(currentIndex);
    }
  
    function goToSlide(index) {
      currentIndex = index;
      updateCarousel(currentIndex);
    }
  
    // Event listeners for next and previous buttons
    carousel.querySelector("[data-carousel-next]").addEventListener("click", showNextSlide);
    carousel.querySelector("[data-carousel-prev]").addEventListener("click", showPrevSlide);
  
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => goToSlide(index));
    });
  
    // Initialize the carousel
    updateCarousel(currentIndex);
  });
  