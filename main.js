document.addEventListener("DOMContentLoaded", () => {

  // плавное появление блоков
  const items = document.querySelectorAll(".animate");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          // если секция contact, делаем stagger для иконок
          if (entry.target.id === "contact") {
            const messengerLinks = entry.target.querySelectorAll("a.animate");
            messengerLinks.forEach((link, i) => {
              setTimeout(() => {
                link.classList.add("show");
              }, i * 300); // по очереди
            });
          } else {
            entry.target.classList.add("show");
          }

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
  );
  items.forEach(item => observer.observe(item));

  // плавный скролл меню
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});

