const images = document.querySelectorAll('.popup-trigger');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

//Kosár
let cart = [];
let selectedProduct = null;

document.querySelectorAll('.popup-trigger').forEach(img => {
  img.addEventListener('click', () => {
    const name = img.alt;
    const type = img.getAttribute('data-type');
    const price = parseInt(img.getAttribute('data-price'));

    if (type === "szenya") {
      selectedProduct = { name, price };
      document.getElementById('popup').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
    } else if (type === "ital") {
      addToCart({ name, price });
    } else {
      console.warn("Ismeretlen terméktípus:", type);
    }
  });
});



function submitForm() {
  if (!selectedProduct) return;

  const zoldseg = document.querySelector('input[name="zoldseg"]:checked')?.value || '';
  const szoszok = Array.from(document.querySelectorAll('input[name="szosz"]:checked')).map(el => el.value);
  const extras = [zoldseg, ...szoszok].filter(x => x).join(', ');

  const finalProduct = {
    name: `${selectedProduct.name} (${extras})`,
    price: selectedProduct.price
  };

  addToCart(finalProduct);
  closePopup();
}

function addToCart(product) {
  cart.push(product);
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - ${item.price} Ft <button onclick="removeFromCart(${index})">🗑️</button>`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = `Végösszeg: ${total} Ft`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  selectedProduct = null;

  document.querySelector('input[name="zoldseg"][value="Salátás"]').checked = true;
  document.querySelectorAll('input[name="szosz"]').forEach(cb => cb.checked = false);
}

function toggleCartPopup() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

function openPaymentPopup() {
  document.getElementById("paymentPopup").style.display = "block";
  overlay.style.display = "block";
}

function closePaymentPopup() {
  document.getElementById("paymentPopup").style.display = "none";
  overlay.style.display = "none";
}

function finalizeOrder() {
  const selectedBreak = document.querySelector('input[name="szunet"]:checked')?.value;

  if (!selectedBreak) {
    alert("Válassz egy szünetet!");
    return;
  }

  alert(`Köszi a rendelést! Átveszed: ${selectedBreak}`);

  cart = []; // Kosár ürítése
  updateCartUI(); // Kosár frissítése
  closePaymentPopup(); // Popup bezárása
}