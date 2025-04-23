const images = document.querySelectorAll('.popup-trigger');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

// Minden kép megkapja az eventlistenert
images.forEach(img => {
  img.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
  });
});

function closePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

let cart = [];

function toggleCart() {
  document.getElementById('cart-panel').classList.toggle('open');
}

function addToCart(itemName) {
  cart.push(itemName);
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const itemsContainer = document.getElementById('cart-items');
  const count = document.getElementById('cart-count');

  itemsContainer.innerHTML = '';

  if (cart.length === 0) {
    itemsContainer.innerHTML = '<li>Nincs még tétel a kosárban.</li>';
  } else {
    cart.forEach((item, i) => {
      const li = document.createElement('li');
      li.innerHTML = `${item} <button onclick="removeFromCart(${i})">✖</button>`;
      itemsContainer.appendChild(li);
    });
  }

  count.textContent = cart.length;
}

function checkout() {
  alert("Köszi a rendelést! 🎉");
  cart = [];
  updateCartUI();
  toggleCart();
}


function submitForm() {
  const zoldseg = document.querySelector('input[name="zoldseg"]:checked')?.value;
  const szoszok = Array.from(document.querySelectorAll('input[name="szosz"]:checked')).map(s => s.value);

  const item = `${zoldseg} + ${szoszok.join(', ')}`;
  addToCart(item);

  closePopup(); // ha van ilyen funkciód
}
