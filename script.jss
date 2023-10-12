
window.addEventListener('scroll', function () {
  const nav = document.getElementById('thirdnav');
  if (window.scrollY > 70) {
    // You can adjust the scroll position (50 in this example) where the color change happens
    nav.style.backgroundColor = 'rgba(44,52,61,255)';
  } 
});


 AOS.init();

 