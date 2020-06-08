/******** search box in the header ********/
const searchBtn = document.querySelector('.header__search-btn');
const searchInput = document.querySelector('.header__search-input');

function onSearchBtnClick() {
  if (searchInput.classList.contains('hidden')) {
    searchInput.classList.remove('hidden');
    searchInput.focus();
  } else {
    const searchString = searchInput.value;
    if (!searchString) {
      searchInput.classList.add('hidden');
    } else {
      const url = new URL(`${window.location.origin}/category-all.html`);
      url.searchParams.append('q', searchString);
      window.location.assign(url.toString());
    }
  }  
}

searchBtn.addEventListener('click', onSearchBtnClick);

searchInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { // Enter
    onSearchBtnClick();
  } else if (event.keyCode === 27) { // Esc
    searchInput.value = '';
    searchInput.classList.add('hidden');
  }
});

/***************** mosaic ******************/
const mosaic = document.querySelector('.mosaic');

if (mosaic) { // home.html only
  for (const el of mosaic.children) {
    if (window.getComputedStyle(el, '::before').zIndex == 1) {
      el.setAttribute('href', 'product-details.html');
    } else {
      el.setAttribute('href', 'category-all.html');
    }
  }
}

/**************** lookbook *****************/
const lookbook = document.querySelector('.lookbook__container');

if (lookbook) {
  const leftArrow = document.querySelector('.lookbook__left-arrow');
  const rightArrow = document.querySelector('.lookbook__right-arrow');

  for (let i = 0; i < lookbook.children.length; ++i) {
    lookbook.children[i].setAttribute('href', (i % 2 ? 'product-details.html' : 'category-all.html'));
  }

  rightArrow.addEventListener('click', (e) => {
    e.preventDefault();
    lookbook.insertBefore(lookbook.children[lookbook.children.length - 1], lookbook.children[0]);
  });

  leftArrow.addEventListener('click', (e) => {
    lookbook.append(lookbook.children[0]);
  });
}