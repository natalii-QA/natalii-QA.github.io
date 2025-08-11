const scrollToTopBtn = document.getElementById('scrollToTopBtn');

function toggleScrollBtn() {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

window.addEventListener('scroll', toggleScrollBtn);
window.addEventListener('load', toggleScrollBtn);

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});