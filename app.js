// Responsive nav bar

const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");

hamburger.addEventListener("click", () => {
  iconToggle();
});

closeIcon.addEventListener("click", () => {
  iconToggle();
});

function iconToggle() {
  const navList = document.querySelector(".nav-list");
  const overlay = document.querySelector(".overlay");

  if (navList.style.display == "block") {
    navList.style.display = "none";
    overlay.style.display = "none";
  } else {
    navList.style.display = "block";
    overlay.style.display = "block";
  }
}

// Cart javascript

const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const cartNumber = document.querySelector(".cartNumber");
const topCartNumber = document.querySelector(".topCart-number");
const cartContent = document.querySelector(".cart-content");
const emptyCart = document.querySelector(".emptyCart");
const addToCartBtn = document.querySelector(".addToCart-btn");
const itemQuantity = document.querySelector(".item-quantity");
const itemPrice = document.querySelector(".item-price");
const deleteIcon = document.querySelector(".delete");
const cart = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");

// Cart quantity

let cartQuantity = 0;

plusBtn.addEventListener("click", () => {
  if (cartQuantity >= 10) {
    cartQuantity--;
  }

  cartQuantity += 1;
  cartNumber.innerHTML = cartQuantity;
  topCartNumber.innerHTML = cartQuantity;

  if (cartQuantity > 0) {
    itemQuantity.innerHTML = cartQuantity;
    itemPrice.innerHTML = `$${cartQuantity * 125.0}.00`;
    cartContent.style.display = "block";
    emptyCart.style.display = "none";
  }

  if (cartOverlay.style.display == "block") {
    topCartNumber.style.display = "flex";
  }
});

minusBtn.addEventListener("click", () => {
  if (cartQuantity < 1) {
    cartQuantity++;
  }

  cartQuantity -= 1;
  cartNumber.innerHTML = cartQuantity;
  topCartNumber.innerHTML = cartQuantity;

  if (cartQuantity > 0) {
    itemQuantity.innerHTML = cartQuantity;
    itemPrice.innerHTML = `$${cartQuantity * 125.0}.00`;
  }

  if (cartQuantity == 0) {
    topCartNumber.style.display = "none";
    cartContent.style.display = "none";
    emptyCart.style.display = "flex";
  }
});

// Add items to cart

addToCartBtn.addEventListener("click", () => {
  if (cartQuantity == 0) {
    topCartNumber.style.display = "none";
  } else if (cartQuantity >= 1) {
    topCartNumber.style.display = "flex";
  }

  if (cartQuantity > 0) {
    itemQuantity.innerHTML = cartQuantity;
    itemPrice.innerHTML = `$${cartQuantity * 125.0}.00`;
  }
});

// Cart items background

cart.addEventListener("click", () => {
  if (cartOverlay.style.display == "block") {
    cartOverlay.style.display = "none";
  } else {
    cartOverlay.style.display = "block";
  }

  if (cartQuantity == 0) {
    emptyCart.style.display = "flex";
    cartContent.style.display = "none";
  }
});

// Delete cart items

deleteIcon.addEventListener("click", () => {
  cartContent.style.display = "none";
  emptyCart.style.display = "flex";

  topCartNumber.style.display = "none";
});

// Close carousel

closeCarousel.addEventListener("click", () => {
  const bodyOverlay = document.querySelector(".body-overlay");
  const carousel = document.querySelector(".carousel");

  carousel.style.display = "none";
  bodyOverlay.style.display = "none";
});

// Carousel

const image1 = document.querySelector(".imageProduct-one");
const image2 = document.querySelector(".imageProduct-two");
const image3 = document.querySelector(".imageProduct-three");
const image4 = document.querySelector(".imageProduct-four");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
let i = 0;

nextBtn.addEventListener("click", () => {
  if (i == 0) {
    image1.style.opacity = 1;
    pagination1.style.border = "2px solid orange";
    pagination1.style.opacity = 0.6;
    image2.style.opacity = 0;
    pagination2.style.border = "none";
    pagination2.style.opacity = 1;
    image3.style.opacity = 0;
    pagination3.style.border = "none";
    pagination3.style.opacity = 1;
    image4.style.opacity = 0;
    pagination4.style.border = "none";
    pagination4.style.opacity = 1;
    i++;
  } else if (i == 1) {
    image1.style.opacity = 0;
    pagination1.style.border = "none";
    pagination1.style.opacity = 1;
    image2.style.opacity = 1;
    pagination2.style.border = "2px solid orange";
    pagination2.style.opacity = 0.6;
    image3.style.opacity = 0;
    pagination3.style.border = "none";
    pagination3.style.opacity = 1;
    image4.style.opacity = 0;
    pagination4.style.border = "none";
    pagination4.style.opacity = 1;
    i++;
  } else if (i == 2) {
    image1.style.opacity = 0;
    pagination1.style.border = "none";
    pagination1.style.opacity = 1;
    image2.style.opacity = 0;
    pagination2.style.border = "none";
    pagination2.style.opacity = 1;
    image3.style.opacity = 1;
    pagination3.style.border = "2px solid orange";
    pagination3.style.opacity = 0.6;
    image4.style.opacity = 0;
    pagination4.style.border = "none";
    pagination4.style.opacity = 1;
    i++;
  } else if (i == 3) {
    image1.style.opacity = 0;
    pagination1.style.border = "none";
    pagination1.style.opacity = 1;
    image2.style.opacity = 0;
    pagination2.style.border = "none";
    pagination2.style.opacity = 1;
    image3.style.opacity = 0;
    pagination3.style.border = "none";
    pagination3.style.opacity = 1;
    image4.style.opacity = 1;
    pagination4.style.border = "2px solid orange";
    pagination4.style.opacity = 0.6;
    i++;
  }
});

previousBtn.addEventListener("click", () => {
  if (i > 3) {
    image1.style.opacity = 0;
    pagination1.style.border = "none";
    pagination1.style.opacity = 1;
    image2.style.opacity = 0;
    pagination2.style.border = "none";
    pagination2.style.opacity = 1;
    image3.style.opacity = 0;
    pagination3.style.border = "none";
    pagination3.style.opacity = 1;
    image4.style.opacity = 1;
    pagination4.style.border = "2px solid orange";
    pagination4.style.opacity = 0.6;
    i--;
  } else if (i > 2) {
    image1.style.opacity = 0;
    pagination1.style.border = "none";
    pagination1.style.opacity = 1;
    image2.style.opacity = 0;
    pagination2.style.border = "none";
    pagination2.style.opacity = 1;
    image3.style.opacity = 1;
    pagination3.style.border = "2px solid orange";
    pagination3.style.opacity = 0.6;
    image4.style.opacity = 0;
    pagination4.style.border = "none";
    pagination4.style.opacity = 1;
    i--;
  } else if (i > 1) {
    image1.style.opacity = 0;
    pagination1.style.border = "none";
    pagination1.style.opacity = 1;
    image2.style.opacity = 1;
    pagination2.style.border = "2px solid orange";
    pagination2.style.opacity = 0.6;
    image3.style.opacity = 0;
    pagination3.style.border = "none";
    pagination3.style.opacity = 1;
    image4.style.opacity = 0;
    pagination4.style.border = "none";
    pagination4.style.opacity = 1;
    i--;
  } else if (i > 0) {
    image1.style.opacity = 1;
    pagination1.style.border = "2px solid orange";
    pagination1.style.opacity = 0.6;
    image2.style.opacity = 0;
    pagination2.style.border = "none";
    pagination2.style.opacity = 1;
    image3.style.opacity = 0;
    pagination3.style.border = "none";
    pagination3.style.opacity = 1;
    image4.style.opacity = 0;
    pagination4.style.border = "none";
    pagination4.style.opacity = 1;
    i--;
  }
});

const thumbnail1 = document.querySelector(".thumbnail1");
const thumbnail2 = document.querySelector(".thumbnail2");
const thumbnail3 = document.querySelector(".thumbnail3");
const thumbnail4 = document.querySelector(".thumbnail4");
const bodyOverlay = document.querySelector(".body-overlay");
const carousel = document.querySelector(".carousel");
const pagination1 = document.querySelector("#pagination1");
const pagination2 = document.querySelector("#pagination2");
const pagination3 = document.querySelector("#pagination3");
const pagination4 = document.querySelector("#pagination4");

thumbnail1.addEventListener("click", () => {
  carousel.style.display = "block";
  bodyOverlay.style.display = "block";

  firstPagination();
});

pagination1.addEventListener("click", () => {
  firstPagination();
});

function firstPagination() {
  image1.style.opacity = 1;
  pagination1.style.opacity = 0.6;
  pagination1.style.border = "2px solid orange";
  image2.style.opacity = 0;
  pagination2.style.opacity = 1;
  pagination2.style.border = "none";
  image3.style.opacity = 0;
  pagination3.style.opacity = 1;
  pagination3.style.border = "none";
  image4.style.opacity = 0;
  pagination4.style.opacity = 1;
  pagination4.style.border = "none";
  i = 0;
}

thumbnail2.addEventListener("click", () => {
  carousel.style.display = "block";
  bodyOverlay.style.display = "block";

  secondPagination();
});

pagination2.addEventListener("click", () => {
  secondPagination();
});

function secondPagination() {
  image1.style.opacity = 0;
  pagination1.style.opacity = 1;
  pagination1.style.border = "none";
  image2.style.opacity = 1;
  pagination2.style.opacity = 0.6;
  pagination2.style.border = "2px solid orange";
  image3.style.opacity = 0;
  pagination3.style.opacity = 1;
  pagination3.style.border = "none";
  image4.style.opacity = 0;
  pagination4.style.opacity = 1;
  pagination4.style.border = "none";
  i = 1;
}

thumbnail3.addEventListener("click", () => {
  carousel.style.display = "block";
  bodyOverlay.style.display = "block";

  thirdPagination();
});

pagination3.addEventListener("click", () => {
  thirdPagination();
});

function thirdPagination() {
  image1.style.opacity = 0;
  pagination1.style.opacity = 1;
  pagination1.style.border = "none";
  image2.style.opacity = 0;
  pagination2.style.opacity = 1;
  pagination2.style.border = "none";
  image3.style.opacity = 1;
  pagination3.style.opacity = 0.6;
  pagination3.style.border = "2px solid orange";
  image4.style.opacity = 0;
  pagination4.style.opacity = 1;
  pagination4.style.border = "none";
  i = 2;
}

thumbnail4.addEventListener("click", () => {
  carousel.style.display = "block";
  bodyOverlay.style.display = "block";

  fourthPagination();
});

pagination4.addEventListener("click", () => {
  fourthPagination();
});

function fourthPagination() {
  image1.style.opacity = 0;
  pagination1.style.opacity = 1;
  pagination1.style.border = "none";
  image2.style.opacity = 0;
  pagination2.style.opacity = 1;
  pagination2.style.border = "none";
  image3.style.opacity = 0;
  pagination3.style.opacity = 1;
  pagination3.style.border = "none";
  image4.style.opacity = 1;
  pagination4.style.opacity = 0.6;
  pagination4.style.border = "2px solid orange";
  i = 3;
}
