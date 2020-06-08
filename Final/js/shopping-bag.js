const basket = document.getElementById('basket-counter');

const chosenGoods = JSON.parse(window.localStorage.getItem('chosenGoods'));
let countItems = 0;
for (const item in chosenGoods) {
  countItems += item.quantity;
}
basket.innerText = '' + countItems;