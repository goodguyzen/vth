function switchLanguage(lang) {
  const enBtn = document.getElementById('lang-en');
  const viBtn = document.getElementById('lang-vi');

  if (lang === 'vi') {
    enBtn.classList.remove('text-blue-700', 'font-bold');
    viBtn.classList.add('text-blue-700', 'font-bold');
  } else {
    viBtn.classList.remove('text-blue-700', 'font-bold');
    enBtn.classList.add('text-blue-700', 'font-bold');
  }

  // Toggle text visibility
  document.querySelectorAll('.lang-en').forEach(el => {
    el.style.display = (lang === 'en') ? '' : 'none';
  });
  document.querySelectorAll('.lang-vi').forEach(el => {
    el.style.display = (lang === 'vi') ? '' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lang-vi').forEach(el => {
      el.style.display = 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
      el.style.display = '';
    });
  });