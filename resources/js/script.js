// const hamburger = document.getElementById('hamburger');
// const slideoutMenu = document.getElementById('slideout-menu');
// const navMenu = document.getElementById('navMenu');
// const closeButton = document.getElementById('close-button');

// newClasses = ['transition-transform',
// 	      'duration-300',
// 	      'ease-in-out',
// 	      'transform']
// hamburger.addEventListener('click', function () {
//   slideoutMenu.classList.remove('hidden');
//   slideoutMenu.classList.add(...newClasses);
//   slideoutMenu.classList.remove('initial-translate')
//   slideoutMenu.classList.toggle('translate-x-0');
//   slideoutMenu.classList.toggle('translate-x-full');

// });

// closeButton.addEventListener('click', function () {
//   slideoutMenu.classList.remove('translate-x-0');
//   slideoutMenu.classList.add('translate-x-full'); // Add the '-translate-x-full' class
// });

// window.addEventListener('resize', function () {
//   if (window.innerWidth > 768) {
//     slideoutMenu.classList.remove('translate-x-0');
//   } else {
//     slideoutMenu.classList.remove('translate-x-0');
//     slideoutMenu.classList.add('translate-x-full');
//   }
// });

// document.addEventListener('click', function (event) {
//   const isClickInsideMenu = slideoutMenu.contains(event.target);
//   const isClickInsideHamburger = hamburger.contains(event.target);

//   if (!isClickInsideMenu && !isClickInsideHamburger) {
//     slideoutMenu.classList.remove('translate-x-0');
//     slideoutMenu.classList.add('translate-x-full'); // Add the '-translate-x-full' class
//   }
// });

// // // Get all the "Read More" links
// const readMoreLinks = document.querySelectorAll('.read-more');

// // Add click event listener to each "Read More" link
// readMoreLinks.forEach((link) => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();
//     // Get the parent container of the clicked link
//     const articleContainer = event.target.closest('.article-container');

//     // Toggle the visibility of the article content
//     const content = articleContainer.querySelector('.article-content');
//     toggleClass = content.getAttribute('data-toggle-class');
//     content.classList.toggle(toggleClass);

//     // Toggle the "Read More" and "Read Less" links
//     const readMoreLink = articleContainer.querySelector('.read-more');
//     const readLessLinks = articleContainer.querySelectorAll('.read-less');
//     readMoreLink.classList.toggle('hidden');
//     readLessLinks.forEach((readLessLink) => {
//       readLessLink.classList.toggle('hidden');
//     });
//   });
// });

// // Get all the "Read Less" links
// const readLessLinks = document.querySelectorAll('.read-less');

// // Add click event listener to each "Read Less" link
// readLessLinks.forEach((link) => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();

//     // Get the parent container of the clicked link
//     const articleContainer = event.target.closest('.article-container');

//     // Toggle the visibility of the article content
//     const content = articleContainer.querySelector('.article-content');
//     toggleClass = content.getAttribute('data-toggle-class');
//     content.classList.toggle(toggleClass);

//     // Toggle the "Read More" and "Read Less" links

//     const readMoreLink = articleContainer.querySelector('.read-more');
//     const readLessLinks = articleContainer.querySelectorAll('.read-less');
//     readMoreLink.classList.toggle('hidden');
//     readLessLinks.forEach((readLessLink) => {
//       readLessLink.classList.toggle('hidden');
//     });
//   });
// });

// Function to hide all elements with the class 'hideable-content'
function hideAllHideableContent() {
  const hideableContents = document.querySelectorAll('.hideable-content');
  hideableContents.forEach(content => {
    content.classList.add('hidden');
  });
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', () => {
  hideAllHideableContent();

  // Get all the "Read More" and "Read Less" links
  const toggleLinks = document.querySelectorAll('.read-more, .read-less');

  // Add click event listener to each link
  toggleLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // Get the parent container of the clicked link
      const articleContainer = event.target.closest('.article-container');

      // Determine if the "Read More" link is currently hidden
      const isReadMoreHidden = articleContainer.querySelector('.read-more').classList.contains('hidden');

      // Find all elements with the 'hideable-content' class
      const hideableContents = articleContainer.querySelectorAll('.hideable-content');

      if (isReadMoreHidden) {
        // If "Read More" is hidden, add "hidden" class to all hideable content
        hideableContents.forEach(content => {
          content.classList.add('hidden');
        });
      } else {
        // If "Read Less" is hidden, remove "hidden" class from all hideable content
        hideableContents.forEach(content => {
          content.classList.remove('hidden');
        });
      }

      // Toggle visibility of the "Read More" and "Read Less" links
      const readMoreLink = articleContainer.querySelector('.read-more');
      const readLessLink = articleContainer.querySelector('.read-less');

      readMoreLink.classList.toggle('hidden');
      readLessLink.classList.toggle('hidden');
    });
  });
});
