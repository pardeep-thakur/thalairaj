// ==========================================================================
// Menu Data
// ==========================================================================
const MENU_DATA = [
  // Biryani Bowls
  {
    id: "bowl-boneless-chick",
    name: "Boneless Chicken Biryani Bowl",
    price: 219,
    desc: "Aromatic basmati rice layered with tender, spiced boneless chicken chunks. Perfect single-serving portion.",
    category: "bowls",
    isVeg: false,
    spicyLevel: 1
  },
  {
    id: "bowl-pepper-chick",
    name: "Pepper Chicken Biryani Bowl",
    price: 219,
    desc: "Flavourful biryani rice served with a fiery topping of boneless pepper chicken fry.",
    category: "bowls",
    isVeg: false,
    spicyLevel: 2
  },
  {
    id: "bowl-exotic-paneer",
    name: "Exotic Paneer Biryani Bowl",
    price: 219,
    desc: "Saffron-infused rice served with rich, pan-seared spiced cottage cheese cubes.",
    category: "bowls",
    isVeg: true,
    spicyLevel: 1
  },
  {
    id: "bowl-pepper-shroom",
    name: "Pepper Mushroom Biryani Bowl",
    price: 219,
    desc: "Indulgent basmati rice bowl topped with black pepper stir-fried fresh mushrooms.",
    category: "bowls",
    isVeg: true,
    spicyLevel: 2
  },

  // Biryanis & Rice
  {
    id: "biryani-boneless-chick",
    name: "Boneless Chicken Biryani",
    price: 289,
    desc: "Our signature boneless chicken biryani cooked with traditional long-grain rice and handpicked 21 spices.",
    category: "biryanis",
    isVeg: false,
    spicyLevel: 1
  },
  {
    id: "biryani-dum-chick",
    name: "Chicken Dum Biryani",
    price: 295,
    desc: "Classic slow-cooked Hyderabadi-style basmati rice with bone-in tender chicken, infused with saffron.",
    category: "biryanis",
    isVeg: false,
    spicyLevel: 2
  },
  {
    id: "biryani-kebab",
    name: "Kebab Biryani",
    price: 285,
    desc: "Unique blend of charcoal-grilled juicy chicken kebabs layered in flavorful biryani rice.",
    category: "biryanis",
    isVeg: false,
    spicyLevel: 1
  },
  {
    id: "biryani-pep-chick",
    name: "Pepper Chicken Boneless Biryani",
    price: 289,
    desc: "Fragrant basmati rice served alongside Southern-style boneless black pepper chicken dry fry.",
    category: "biryanis",
    isVeg: false,
    spicyLevel: 2
  },
  {
    id: "biryani-exotic-paneer",
    name: "Exotic Paneer Biryani",
    price: 289,
    desc: "Premium basmati rice slow-baked with marinated fresh paneer cubes, mint, and saffron.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 1
  },
  {
    id: "biryani-pep-paneer",
    name: "Pepper Paneer Biryani",
    price: 275,
    desc: "Rich saffron rice baked with dry-spiced paneer cubes stir-fried with cracked black pepper.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 2
  },
  {
    id: "biryani-pep-shroom",
    name: "Pepper Mushroom Biryani",
    price: 259,
    desc: "Aromatic basmati rice cooked with fresh mushrooms seasoned with Southern black pepper masala.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 2
  },
  {
    id: "biryani-potato-dum",
    name: "Potato Dum Biryani",
    price: 239,
    desc: "Authentic dum-style vegetarian biryani cooked with herb-marinated baby potatoes.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 1
  },
  {
    id: "biryani-egg",
    name: "Egg Biryani",
    price: 219,
    desc: "Savory basmati biryani rice served with hard-boiled eggs tossed in a spicy masala glaze.",
    category: "biryanis",
    isVeg: false,
    spicyLevel: 1
  },
  {
    id: "biryani-rice-only",
    name: "Signature Biryani Rice",
    price: 199,
    desc: "Our highly aromatic seasoned basmati rice without meat, cooked in signature spices.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 1
  },
  {
    id: "rice-plain",
    name: "Plain Basmati Rice",
    price: 129,
    desc: "Perfectly steamed, premium long-grain white basmati rice.",
    category: "biryanis",
    isVeg: true,
    spicyLevel: 0
  },

  // Family Packs
  {
    id: "fam-boneless-chick",
    name: "Boneless Chicken Biryani Family Pack",
    price: 875,
    desc: "Feeds 3-4 people. Served with generous portions of boneless chicken biryani, extra raita, and salan.",
    category: "family",
    isVeg: false,
    spicyLevel: 1
  },
  {
    id: "fam-pep-chick",
    name: "Pepper Chicken Boneless Biryani Family Pack",
    price: 875,
    desc: "Feeds 3-4 people. Saffron rice combined with extra-spicy boneless black pepper chicken fry.",
    category: "family",
    isVeg: false,
    spicyLevel: 2
  },
  {
    id: "fam-dum-chick",
    name: "Dum Chicken Biryani Family Pack",
    price: 875,
    desc: "Feeds 3-4 people. Authentic classic slow-cooked bone-in chicken dum biryani, classic family size.",
    category: "family",
    isVeg: false,
    spicyLevel: 2
  },
  {
    id: "fam-kebab-chick",
    name: "Kebab Chicken Biryani Family Pack",
    price: 849,
    desc: "Feeds 3-4 people. Perfect combination of charcoal-grilled chicken kebabs layered in biryani rice.",
    category: "family",
    isVeg: false,
    spicyLevel: 1
  },
  {
    id: "fam-exotic-paneer",
    name: "Exotic Paneer Biryani Family Pack",
    price: 849,
    desc: "Feeds 3-4 people. Indulgent vegetarian feast of slow-baked paneer biryani for family gatherings.",
    category: "family",
    isVeg: true,
    spicyLevel: 1
  },
  {
    id: "fam-pep-shroom",
    name: "Pepper Mushroom Biryani Family Pack",
    price: 825,
    desc: "Feeds 3-4 people. Loaded with delicious pepper-seasoned mushrooms layered in premium basmati.",
    category: "family",
    isVeg: true,
    spicyLevel: 2
  },

  // Starters
  {
    id: "start-neruppu-21",
    name: "Neruppu Chicken 21 Boneless",
    price: 249,
    desc: "Our absolute bestseller! Fiery, hot pan-fried boneless chicken tossed in a secret spicy red glaze.",
    category: "starters",
    isVeg: false,
    spicyLevel: 3
  },
  {
    id: "start-kebab-full",
    name: "Chicken Kebab Boneless (Full)",
    price: 229,
    desc: "Crispy, deep-fried spiced boneless chicken bites marinated in yogurt and traditional herbs.",
    category: "starters",
    isVeg: false,
    spicyLevel: 1
  },
  {
    id: "start-pep-chick",
    name: "Pepper Chicken Fry Boneless",
    price: 249,
    desc: "Classic dry-fry chicken cooked with crushed black pepper, green chilies, and fresh curry leaves.",
    category: "starters",
    isVeg: false,
    spicyLevel: 2
  },
  {
    id: "start-roast-chick",
    name: "Roasted Chicken Masala",
    price: 249,
    desc: "Tender boneless chicken roasted in a thick onion-tomato gravy with freshly ground spices.",
    category: "starters",
    isVeg: false,
    spicyLevel: 2
  },
  {
    id: "start-roast-paneer",
    name: "Roasted Paneer Masala",
    price: 219,
    desc: "Spiced cottage cheese cubes pan-roasted in a fragrant, thick semi-dry gravy.",
    category: "starters",
    isVeg: true,
    spicyLevel: 1
  },
  {
    id: "start-pep-paneer",
    name: "Pepper Paneer Fry",
    price: 219,
    desc: "Cottage cheese cubes wok-tossed with crushed black pepper, capsicum, and herbs.",
    category: "starters",
    isVeg: true,
    spicyLevel: 2
  },
  {
    id: "start-pep-shroom",
    name: "Mushroom Pepper Fry",
    price: 219,
    desc: "Fresh button mushrooms stir-fried with black pepper, mustard seeds, and curry leaves.",
    category: "starters",
    isVeg: true,
    spicyLevel: 2
  },
  {
    id: "start-pot-sholay",
    name: "Potato Sholay",
    price: 179,
    desc: "Crispy baby potatoes tossed in a spicy, tangy red chili and yogurt glaze.",
    category: "starters",
    isVeg: true,
    spicyLevel: 2
  },

  // Extras
  {
    id: "extra-ghee-roti",
    name: "Ghee Wheat Roti",
    price: 30,
    desc: "Soft whole wheat flatbread baked on a tawa and brushed with rich pure ghee.",
    category: "extras",
    isVeg: true,
    spicyLevel: 0
  },
  {
    id: "extra-plain-roti",
    name: "Wheat Roti",
    price: 20,
    desc: "Soft flame-baked whole wheat flatbread.",
    category: "extras",
    isVeg: true,
    spicyLevel: 0
  },
  {
    id: "extra-raita",
    name: "Raita",
    price: 20,
    desc: "Cooling whipped yogurt condiment seasoned with onions, cucumber, and roasted cumin.",
    category: "extras",
    isVeg: true,
    spicyLevel: 0
  },
  {
    id: "extra-egg",
    name: "Thalairaj Whole Egg",
    price: 20,
    desc: "A single, seasoned hard-boiled egg.",
    category: "extras",
    isVeg: false,
    spicyLevel: 0
  },
  {
    id: "extra-curry",
    name: "Salan Curry",
    price: 20,
    desc: "Rich, spiced gravy peanut-sesame salan to accompany your biryani.",
    category: "extras",
    isVeg: true,
    spicyLevel: 1
  }
];

// ==========================================================================
// Application State
// ==========================================================================
let activeCategory = "all";
let searchKeyword = "";
let isVegOnly = false;

// Category Images Map
const categoryImages = {
  bowls: 'assets/menu_bowl.png',
  biryanis: 'assets/menu_biryani.png',
  family: 'assets/menu_family.png',
  starters: 'assets/menu_starter.png',
  extras: 'assets/menu_extra.png'
};

// ==========================================================================
// Initialize App
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setupEventListeners();
  setupScrollEffects();
  setupRevealAnimations();
  setupHeroParallax();
  init3DHero();
});

// ==========================================================================
// Menu Rendering & Filtering
// ==========================================================================
function renderMenu() {
  const grid = document.getElementById("foodGrid");
  const emptyState = document.getElementById("emptyState");
  if (!grid || !emptyState) return;
  
  grid.innerHTML = "";

  const filteredItems = MENU_DATA.filter(item => {
    // Category Filter
    if (activeCategory !== "all" && item.category !== activeCategory) {
      return false;
    }
    // Veg Filter
    if (isVegOnly && !item.isVeg) {
      return false;
    }
    // Search Filter
    if (searchKeyword) {
      const kw = searchKeyword.toLowerCase();
      const matchName = item.name.toLowerCase().includes(kw);
      const matchDesc = item.desc.toLowerCase().includes(kw);
      if (!matchName && !matchDesc) {
        return false;
      }
    }
    return true;
  });

  if (filteredItems.length === 0) {
    grid.style.display = "none";
    emptyState.style.display = "flex";
    return;
  }

  grid.style.display = "grid";
  emptyState.style.display = "none";

  filteredItems.forEach(item => {
    // Generate spicy peppers
    let spicyIcons = "";
    if (item.spicyLevel > 0) {
      spicyIcons = `<span class="spicy-badge" title="Spicy Level ${item.spicyLevel}/3">`;
      for (let i = 0; i < item.spicyLevel; i++) {
        spicyIcons += `<i class="ph-fill ph-flame"></i>`;
      }
      spicyIcons += `</span>`;
    }

    const card = document.createElement("div");
    card.className = "food-card-item";
    
    const foodImg = categoryImages[item.category] || 'assets/menu_biryani.png';
    const zomatoLink = `https://www.zomato.com/ncr/thalairaj-biryani-tilak-nagar-new-delhi`;
    const swiggyLink = `https://www.swiggy.com/search?query=Thalairaj+Biryani`;

    card.innerHTML = `
      <div class="food-image-container">
        <img src="${foodImg}" alt="${item.name}" class="food-img-3d" loading="lazy" />
        <div class="food-img-shadow"></div>
      </div>
      <div>
        <div class="food-card-top">
          <div class="food-badge-wrapper">
            <span class="diet-dot ${item.isVeg ? 'veg' : 'nonveg'}" title="${item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
            <span class="category-tag">${item.category}</span>
          </div>
          ${spicyIcons}
        </div>
        <h3 class="food-title">${item.name}</h3>
        <p class="food-desc">${item.desc}</p>
      </div>
      <div class="food-card-bottom">
        <div class="food-price-row">
          <span class="food-price">${item.price}</span>
        </div>
        <div class="food-order-actions">
          <a href="${zomatoLink}" target="_blank" rel="noopener" class="btn-order-channel btn-zomato">
            <i class="ph-bold ph-arrow-square-out"></i> Zomato
          </a>
          <a href="${swiggyLink}" target="_blank" rel="noopener" class="btn-order-channel btn-swiggy">
            <i class="ph-bold ph-arrow-square-out"></i> Swiggy
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function setupEventListeners() {
  // Navigation Mobile Menu Toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const toggleIcon = document.getElementById("toggleIcon");

  if (navToggle && navLinks && toggleIcon) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      toggleIcon.className = isOpen ? "ph-bold ph-x" : "ph-bold ph-list";
    });
  }

  // Close Mobile Menu on clicking a link
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navLinks && toggleIcon) {
        navLinks.classList.remove("open");
        toggleIcon.className = "ph-bold ph-list";
      }
      
      // Update active link immediately
      document.querySelectorAll(".nav-link").forEach(nl => nl.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Search Input Handler
  const searchInput = document.getElementById("menuSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value;
      renderMenu();
    });
  }

  // Filter Categories Handler
  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-category");
      renderMenu();
    });
  });

  // Veg Switch Toggle Handler
  const vegToggle = document.getElementById("vegToggle");
  if (vegToggle) {
    vegToggle.addEventListener("change", (e) => {
      isVegOnly = e.target.checked;
      renderMenu();
    });
  }

  // Spice Explorer Click Handler
  const spiceCards = document.querySelectorAll(".spice-card");
  spiceCards.forEach(card => {
    card.addEventListener("click", () => {
      if (card.classList.contains("active")) {
        card.classList.remove("active");
      } else {
        spiceCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
      }
    });
  });

  // FAQ Accordion click
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(fi => fi.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
}

// ==========================================================================
// Scroll and Header Styling Effects
// ==========================================================================
function setupScrollEffects() {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// ==========================================================================
// Intersection Observer (Scroll Reveal Animation)
// ==========================================================================
function setupRevealAnimations() {
  const revealElements = document.querySelectorAll(".fade-in");
  
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el, index) => {
    if (index % 4 === 1) el.classList.add("delay-100");
    if (index % 4 === 2) el.classList.add("delay-200");
    if (index % 4 === 3) el.classList.add("delay-300");
    
    revealObserver.observe(el);
  });
}

// ==========================================================================
// Hero Centerpiece 3D Mouse Parallax & Scroll Effect
// ==========================================================================
function setupHeroParallax() {
  const container = document.getElementById("hero-3d-container");
  const videoCard = document.getElementById("hero-video-card");
  
  if (!container || !videoCard) return;
  
  window.addEventListener("mousemove", (e) => {
    // Normalize coordinates (-0.5 to 0.5)
    const normX = (e.clientX / window.innerWidth) - 0.5;
    const normY = (e.clientY / window.innerHeight) - 0.5;
    
    // Tilt the video card
    const cardRotX = -normY * 16; // rot X up/down
    const cardRotY = normX * 16;  // rot Y left/right
    videoCard.style.transform = `rotateX(${cardRotX}deg) rotateY(${cardRotY}deg) translateZ(10px)`;
  });

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY < 800) {
      // Sink the centerpiece slightly and fade out
      videoCard.style.transform = `translateY(${scrollY * 0.15}px) scale(${1 - scrollY * 0.0004})`;
      videoCard.style.opacity = `${1 - scrollY * 0.0012}`;
    }
  });
}

// ==========================================================================
// 3D Hero Section - Three.js Implementation (Steam & Spices)
// ==========================================================================
function init3DHero() {
  const container = document.getElementById("hero-3d-container");
  const canvas = document.getElementById("hero-3d-canvas");
  if (!container || !canvas) return;

  if (typeof THREE === "undefined") {
    console.warn("Three.js is not loaded.");
    return;
  }

  // 1. Scene setup
  const scene = new THREE.Scene();
  
  // 2. Camera setup
  const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 7.5);

  // 3. Renderer setup
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Groups
  const steamGroup = new THREE.Group();
  scene.add(steamGroup);

  const spicesGroup = new THREE.Group();
  scene.add(spicesGroup);

  // 4. Lights
  const ambientLight = new THREE.AmbientLight(0xfff8f2, 0.8);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffe6b3, 1.8);
  keyLight.position.set(5, 5, 5);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xf26522, 2.5); // Saffron rim glow
  rimLight.position.set(-5, 3, -5);
  scene.add(rimLight);

  // Dynamic warm glow point light in center representing heat of the handi
  const glowLight = new THREE.PointLight(0xff7700, 3, 5);
  glowLight.position.set(0, 0.5, 0.2);
  scene.add(glowLight);

  // 5. Steam Particles (rising from pot rim)
  const steamCount = 35;
  const steamParticles = [];
  const steamMat = new THREE.MeshBasicMaterial({
    color: 0xfff4e6,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending
  });

  for (let i = 0; i < steamCount; i++) {
    const size = 0.05 + Math.random() * 0.08;
    const geom = new THREE.SphereGeometry(size, 8, 8);
    const particle = new THREE.Mesh(geom, steamMat.clone());
    
    resetParticle(particle);
    steamGroup.add(particle);
    steamParticles.push(particle);
  }

  function resetParticle(p) {
    // Start at virtual pot rim (centered around 0, y ranges from -0.8 to -0.4)
    p.position.set(
      (Math.random() - 0.5) * 1.6,
      -0.6 + Math.random() * 0.2,
      (Math.random() - 0.5) * 1.0
    );
    p.scale.set(1, 1, 1);
    p.userData = {
      vx: (Math.random() - 0.5) * 0.012,
      vy: 0.012 + Math.random() * 0.015,
      vz: (Math.random() - 0.5) * 0.012,
      opacity: 0.12 + Math.random() * 0.18,
      growSpeed: 0.012 + Math.random() * 0.012
    };
    p.material.opacity = 0;
  }

  // 6. Floating 3D Spices
  const cardamomGeom = new THREE.SphereGeometry(0.15, 16, 16);
  cardamomGeom.scale(0.7, 1.2, 0.7);
  const cardamomMat = new THREE.MeshStandardMaterial({
    color: 0x829a66, // Warm herbal green cardamom
    roughness: 0.8
  });

  // Star Anise
  const starAniseGroup = new THREE.Group();
  const petalGeom = new THREE.ConeGeometry(0.06, 0.3, 4);
  petalGeom.scale(1, 1, 0.45);
  const starMat = new THREE.MeshStandardMaterial({
    color: 0x783e19, // Dark rich star anise brown
    roughness: 0.85
  });
  const centerSphere = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), starMat);
  starAniseGroup.add(centerSphere);
  for (let i = 0; i < 8; i++) {
    const angle = i * (Math.PI / 4);
    const petal = new THREE.Mesh(petalGeom, starMat);
    petal.position.set(Math.sin(angle) * 0.16, 0, Math.cos(angle) * 0.16);
    petal.rotation.x = Math.PI / 2;
    petal.rotation.z = -angle;
    starAniseGroup.add(petal);
  }

  // Clove
  const cloveGroup = new THREE.Group();
  const cloveMat = new THREE.MeshStandardMaterial({
    color: 0x3d2113, // Clove deep black-brown
    roughness: 0.9
  });
  const cloveStem = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.22, 8), cloveMat);
  cloveGroup.add(cloveStem);
  const cloveHead = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), cloveMat);
  cloveHead.position.y = 0.11;
  cloveGroup.add(cloveHead);
  for (let i = 0; i < 4; i++) {
    const angle = i * (Math.PI / 2);
    const prong = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.03, 4), cloveMat);
    prong.position.set(Math.sin(angle) * 0.025, 0.13, Math.cos(angle) * 0.025);
    prong.rotation.y = angle;
    cloveGroup.add(prong);
  }

  // Position Spices floating in spaces around the centerpiece
  const spiceMeshes = [
    { mesh: new THREE.Mesh(cardamomGeom, cardamomMat), x: -3.0, y: 1.0, z: 1.2 },
    { mesh: starAniseGroup.clone(), x: 3.0, y: -0.6, z: 1.8 },
    { mesh: cloveGroup.clone(), x: -2.5, y: -1.5, z: 1.0 },
    { mesh: new THREE.Mesh(cardamomGeom, cardamomMat), x: 2.6, y: 1.6, z: 0.6 },
    { mesh: starAniseGroup.clone(), x: -2.0, y: 2.0, z: -1.0 }
  ];

  spiceMeshes.forEach((item) => {
    item.mesh.position.set(item.x, item.y, item.z);
    item.mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    item.mesh.userData = {
      baseY: item.y,
      bobOffset: Math.random() * Math.PI * 2,
      bobSpeed: 0.0015 + Math.random() * 0.001,
      rotX: 0.004 + Math.random() * 0.004,
      rotY: 0.004 + Math.random() * 0.004,
      rotZ: 0.004 + Math.random() * 0.004
    };
    spicesGroup.add(item.mesh);
  });

  // Mouse interactivity variables
  let mouseX = 0;
  let mouseY = 0;
  
  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1; // standard Three.js webgl y direction
  });

  // Scroll interactive positioning
  let scrollPercent = 0;
  window.addEventListener("scroll", () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll > 0) {
      scrollPercent = window.scrollY / maxScroll;
    }
  });

  // Resize handler
  function onWindowResize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    
    if (window.innerWidth < 768) {
      spicesGroup.scale.set(0.7, 0.7, 0.7);
      steamGroup.scale.set(0.75, 0.75, 0.75);
    } else {
      spicesGroup.scale.set(1.0, 1.0, 1.0);
      steamGroup.scale.set(1.0, 1.0, 1.0);
    }
  }
  window.addEventListener("resize", onWindowResize);
  onWindowResize();

  // Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    
    const time = clock.getElapsedTime();

    // Camera responds to mouse movements for dynamic spice viewport parallax
    camera.position.x += (mouseX * 1.6 - camera.position.x) * 0.04;
    camera.position.y += (mouseY * 1.6 - camera.position.y) * 0.04;
    camera.lookAt(scene.position);

    // Scroll effect (pull steam and spices down out of view)
    steamGroup.position.y = -(scrollPercent * 4.0);
    spicesGroup.position.y = -(scrollPercent * 4.0);

    // Animate Steam
    steamParticles.forEach(p => {
      const ud = p.userData;
      
      p.position.x += ud.vx;
      p.position.y += ud.vy;
      p.position.z += ud.vz;
      
      p.scale.x += ud.growSpeed;
      p.scale.y += ud.growSpeed;
      p.scale.z += ud.growSpeed;

      const heightOffset = p.position.y - (-0.6); // lifespan offset
      const lifePercent = heightOffset / 2.2;
      
      if (lifePercent < 0.2) {
        p.material.opacity = (lifePercent / 0.2) * ud.opacity;
      } else {
        p.material.opacity = (1 - (lifePercent - 0.2) / 0.8) * ud.opacity;
      }

      if (p.position.y > 2.0 || p.material.opacity <= 0) {
        resetParticle(p);
      }
    });

    // Animate Spices
    spicesGroup.children.forEach(spice => {
      const ud = spice.userData;
      spice.position.y = ud.baseY + Math.sin(time * 1.4 + ud.bobOffset) * 0.18;
      spice.rotation.x += ud.rotX;
      spice.rotation.y += ud.rotY;
      spice.rotation.z += ud.rotZ;
    });

    // Pulse center glow light
    glowLight.intensity = 2.0 + Math.sin(time * 3.5) * 1.0;

    renderer.render(scene, camera);
  }

  animate();
}
