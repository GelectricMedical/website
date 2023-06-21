const hamburger = document.getElementById('hamburger');
const slideoutMenu = document.getElementById('slideout-menu');
const navMenu = document.getElementById('navMenu');
const closeButton = document.getElementById('close-button');

newClasses = ['transition-transform',
	      'duration-300',
	      'ease-in-out',
	      'transform']
hamburger.addEventListener('click', function () {
  slideoutMenu.classList.remove('hidden');
  slideoutMenu.classList.add(...newClasses);
  slideoutMenu.classList.remove('initial-translate')
  slideoutMenu.classList.toggle('translate-x-0');
  slideoutMenu.classList.toggle('translate-x-full');

});

closeButton.addEventListener('click', function () {
  slideoutMenu.classList.remove('translate-x-0');
  slideoutMenu.classList.add('translate-x-full'); // Add the '-translate-x-full' class
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    slideoutMenu.classList.remove('translate-x-0');
  } else {
    slideoutMenu.classList.remove('translate-x-0');
    slideoutMenu.classList.add('translate-x-full');
  }
});

document.addEventListener('click', function (event) {
  const isClickInsideMenu = slideoutMenu.contains(event.target);
  const isClickInsideHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideHamburger) {
    slideoutMenu.classList.remove('translate-x-0');
    slideoutMenu.classList.add('translate-x-full'); // Add the '-translate-x-full' class
  }
});
