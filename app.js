const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

// arrows.forEach((arrow, i) => {
//   arrow.addEventListener('click', () => {
//     let distance = movieLists[i].getBoundingClientRect().x - 100;
//     console.log(distance);
//     movieLists[i].style.transform = `translateX(-${270 - distance}px)`;
//     // after every click find initial position
//   });
// });

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll('img').length;
  let clickCounter = 0;
  arrow.addEventListener('click', () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (3 + clickCounter) + (5 - ratio) > 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get('transform')[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = 'translateX(0)';
      clickCounter = 0;
    }
  });
});

// 7 - (3 + 3) + (4 - 4)

//  Toggle
const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll(
  '.container,.movie-list-title,.navbar,.navbar-container,.sidebar,.left-menu-icon,.toggle'
);

ball.addEventListener('click', () => {
  items.forEach((item) => {
    item.classList.toggle('active');
  });
  ball.classList.toggle('active');
});
