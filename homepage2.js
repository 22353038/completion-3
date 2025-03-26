const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".range__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".location__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".location__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".location__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".location__content .location__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const selectCards = document.querySelectorAll(".select__card");
selectCards[0].classList.add("show__info");

const price = ["225", "455", "275", "625", "395"];

const priceEl = document.getElementById("select-price");

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    
    // Coverflow effect settings
    coverflowEffect: {
      rotate: 0,
      depth: 500,
      modifier: 1,
      scale: 0.75,
      slideShadows: false,
      stretch: -100,
    },
    
    // If you need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // If you need navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // If you need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
    // Callback when slide changes
    on: {
      slideChangeTransitionStart: function() {
        const index = this.realIndex;
        // Your existing price update logic
        const priceEl = document.getElementById('select-price');
        const price = ["225", "455", "275", "625", "395"];
        if (priceEl && price[index]) {
          priceEl.innerText = price[index];
        }
        
        // Your existing show_info logic
        const selectCards = document.querySelectorAll('.select__card');
        selectCards.forEach((item) => {
          item.classList.remove('show__info');
        });
        if (selectCards[index]) {
          selectCards[index].classList.add('show__info');
        }
      }
    }
  });
});

ScrollReveal().reveal(".story__card", {
  ...scrollRevealOption,
  interval: 500,
});

const banner = document.querySelector(".banner__wrapper");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1000,
});
// Product details functionality
const productLinks = document.querySelectorAll('.product-link');
const productDetailsContainer = document.createElement('div');
productDetailsContainer.className = 'product-details-container';
document.body.appendChild(productDetailsContainer);

// Product data
const products = {
  camera: {
    title: "Canon EOS R6 Mirrorless Camera",
    price: "$195/day",
    description: "Professional mirrorless camera with 20MP sensor, 4K video, and advanced autofocus system.",
    specs: [
      "20.1MP Full-Frame CMOS Sensor",
      "4K UHD Video at 60fps",
      "Dual Pixel CMOS AF II",
      "5-axis In-body Stabilization",
      "Weather-sealed body"
    ],
    image: "CAMER.webp"
  },
  "washing-machine": {
    title: "LG Front Load Washing Machine",
    price: "$85/day",
    description: "Energy efficient front load washing machine with smart features and large capacity.",
    specs: [
      "8.5kg Capacity",
      "AI Direct Drive Motor",
      "Steam Technology",
      "SmartThinQ Enabled",
      "Energy Star Certified"
    ],
    image: "washing-machine.jpg"
  },
  "air-cooler": {
    title: "Honeywell Portable Air Cooler",
    price: "$45/day",
    description: "Powerful evaporative air cooler for medium to large rooms with remote control.",
    specs: [
      "3 Fan Speeds",
      "25L Water Tank",
      "Cools up to 300 sq.ft",
      "Low Energy Consumption",
      "Washable Dust Filter"
    ],
    image: "air-cooler.jpg"
  },
  tv: {
    title: "Samsung 65\" QLED 4K Smart TV",
    price: "$150/day",
    description: "Stunning QLED display with Quantum Dot technology and smart features.",
    specs: [
      "65\" 4K UHD Resolution",
      "Quantum HDR 12X",
      "Quantum Processor 4K",
      "Alexa & Google Assistant Built-in",
      "Multiple HDMI Ports"
    ],
    image: "SMART TV.webp"
  }
};

// Show product details
function showProductDetails(productId) {
  const product = products[productId];
  
  productDetailsContainer.innerHTML = `
    <div class="product-details-overlay"></div>
    <div class="product-details-modal">
      <button class="close-product-details">&times;</button>
      <div class="product-details-content">
        <div class="product-image">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-info">
          <h2>${product.title}</h2>
          <div class="product-price">${product.price}</div>
          <p class="product-description">${product.description}</p>
          <h3>Specifications:</h3>
          <ul class="product-specs">
            ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
          </ul>
          <div class="product-actions">
            <button class="btn rent-now">Rent Now</button>
            <button class="btn add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  productDetailsContainer.style.display = 'block';
  
  // Close button event
  document.querySelector('.close-product-details').addEventListener('click', () => {
    productDetailsContainer.style.display = 'none';
  });
  
  // Overlay click to close
  document.querySelector('.product-details-overlay').addEventListener('click', () => {
    productDetailsContainer.style.display = 'none';
  });
}

// Add click events to product links
productLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const productId = link.getAttribute('data-product');
    showProductDetails(productId);
  });
});