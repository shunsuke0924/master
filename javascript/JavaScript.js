window.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  hero.classList.add('visible');
});


document.addEventListener('DOMContentLoaded', () => {
  const fadeItems = document.querySelectorAll('.fade-item');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  });

  fadeItems.forEach(item => {
    observer.observe(item);
  });
});


const select = document.getElementById("age");
            for (let i = 18; i <= 99; i++) {
                const option = document.createElement("option");
                option.value = i;
                option.text = `${i}`;
                select.appendChild(option);
            }