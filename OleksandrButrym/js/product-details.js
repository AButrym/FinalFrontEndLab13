// add products to purchase list are kept in local storage
const productPicture = document.querySelector('.details__picture');
productPicture.style.backgroundImage = 'url("img/details/01.jpg")';
const productMiniatures = document.querySelectorAll('.details__picture > div');
let ixPicture = 2;
for (const el of productMiniatures) {
  el.style.backgroundImage = `url("img/details/0${ixPicture++}.jpg")`;
  el.addEventListener('click', (e) => {
    [el.style.backgroundImage, productPicture.style.backgroundImage] = [productPicture.style.backgroundImage, el.style.backgroundImage];
  });
}