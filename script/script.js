const mainSlider = document.querySelector('.slider-button-wrapper');
const sliderList = document.querySelector('.slider-list');
const mainBody = document.querySelector('body');
const pagination = document.querySelector('.slider-pagination');

const MainBodyColor = [
  'pink',
  'blue',
  'yellow'
]

var mainBodyCount = 0;

const isPagination = (num) => {
  const collections = {...pagination.children};
  const paginationActive = collections[num].children[0].closest('.slider-pagination-button');

  for (let i = 0; i < pagination.children.length; i++) {
    collections[i].children[0].closest('.slider-pagination-button').classList.remove('current');
  }

  paginationActive.classList.add('current');
}

const getScrollSlider = (evt) => {
  sliderList.children[mainBodyCount].classList.add('visually-hidden')
  if(evt.target.closest('.slider-button')) {
    evt.target.closest('.slider-prev') ? mainBodyCount -= 1 : mainBodyCount += 1;
    if (mainBodyCount < 0) {
      mainBodyCount = 2;
    } else if ( mainBodyCount > 2) {
      mainBodyCount = 0;
    }
    mainBody.classList.value = `${MainBodyColor[mainBodyCount]}-wrapper`;
    isPagination(mainBodyCount);
  }
  sliderList.children[mainBodyCount].classList.remove('visually-hidden');
}

sliderList.addEventListener('click', (evt) => {getScrollSlider(evt)});
