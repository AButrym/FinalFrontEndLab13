let chosenGoodsLive = JSON.parse(window.localStorage.getItem('chosenGoods') || '{}');

const productPicture = document.querySelector('.details__picture');

productPicture.style.backgroundImage = 'url("img/details/01.jpg")';

const productMiniatures = document.querySelectorAll('.details__picture > div');

let ixPicture = 2;
for (const el of productMiniatures) {
  el.style.backgroundImage = `url("img/details/0${ixPicture++}.jpg")`;
  el.addEventListener('click', (e) => {
    [el.style.backgroundImage, productPicture.style.backgroundImage] =
    [productPicture.style.backgroundImage, el.style.backgroundImage];
  });
}

const btnAdd = document.querySelector('.details__btn-add');
const basketLive = document.querySelector('#basket-counter');

btnAdd.addEventListener('click', () => {
  const currentItem = document.querySelector('.details__article-number').textContent;
  const chosenSize = document.querySelector('.details__size:checked').getAttribute('value');
  if (currentItem in chosenGoodsLive) {
    const old = chosenGoodsLive[currentItem].sizes[chosenSize] || 0;
    chosenGoodsLive[currentItem].sizes[chosenSize] = old + 1;
  } else {
    chosenGoodsLive[currentItem] = {
      price: document.querySelector('.details__price').textContent,
      name: document.querySelector('.details__product-name').textContent,
      sizes: {chosenSize: 1}
    };
  }
  basketLive.textContent = 1 + Number(basketLive.textContent);
  window.localStorage.setItem('chosenGoods', JSON.stringify(chosenGoodsLive));
});
