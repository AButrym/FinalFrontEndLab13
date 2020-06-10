const chosenGoodsLive = JSON.parse(window.localStorage.getItem('chosenGoods') || '{}');

const basketLive = document.getElementById('basket-counter');

const tableBody = document.querySelector('.shopping-bag__table-body');

function deleteSize(article, size) {
  delete chosenGoodsLive[article].sizes[size];
  initTable();
}

function quantityChanged(article, size, newQty) {
  chosenGoodsLive[article].sizes[size] = newQty;
  updateBasket();
}

function updateBasket() {
  const chosenGoods = JSON.parse(window.localStorage.getItem('chosenGoods') || '{}');
  let countItems = 0;
  for (const item of Object.values(chosenGoods)) {
    for (const quantity of Object.values(item.sizes)) {
      countItems += quantity;
    }
  }
  basketLive.innerText = '' + countItems;
}

function initTable() {
  updateBasket();
  tableBody.innerHTML = '';
  for (const productArticle in chosenGoodsLive) {
    const product = chosenGoodsLive[productArticle];
    const sizes = product.sizes;
    for (const size in sizes) {
      const row = document.createElement('tr');
      row.innerHTML = `
      <td><div class="shopping-bag__product-photo"></div></td>
      <td>${product.name}</td>
      <td>Some Color</td>
      <td>${size}</td>
      <td><input type="number" id="quantity" name="quantity" min="1" max="5" size="1" value="${sizes[size]}" onchange="(e) => {quantityChanged(${productArticle}, ${size}, e.target.value);}"></td>
      <td>${product.price}</td>
      <td><button onclick="">x</button></td>
      `;
      shoppingBagTable.appendChild(row);
    }
  }
}

