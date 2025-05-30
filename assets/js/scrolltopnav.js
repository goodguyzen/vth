let lastScroll = 0;
const nav = document.getElementById('topnav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    nav.style.transform = 'translateY(0)';
    return;
  }
  if (currentScroll > lastScroll) {
    // Scrolling down
    nav.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    nav.style.transform = 'translateY(0)';
  }
  lastScroll = currentScroll;
});
