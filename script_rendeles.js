const img = document.getElementById('sandwichImg');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

img.addEventListener('click', () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

function closePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

function submitForm() {
  const zoldseg = document.querySelector('input[name="zoldseg"]:checked').value;
  const szoszok = [...document.querySelectorAll('input[name="szosz"]:checked')].map(el => el.value);

  alert(`Kiválasztva: ${zoldseg}, Szószok: ${szoszok.join(', ')}`);
  closePopup();
}