const typewriterElements = document.querySelectorAll('.typewriter');
let delay = 0;

typewriterElements.forEach(el => {
  const text = el.getAttribute('data-text');
  el.textContent = '';
  setTimeout(() => {
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40); // typing speed (ms per character)
  }, delay);
  delay += text.length * 40 + 300; // stagger lines with a short pause
});