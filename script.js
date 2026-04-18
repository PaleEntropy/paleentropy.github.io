const revealSections = document.querySelectorAll(".reveal-section");
const floatingDecor = document.querySelector(".floating-decor");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealSections.forEach((section, index) => {
  section.style.transitionDelay = `${index * 45}ms`;
  sectionObserver.observe(section);
});

window.addEventListener(
  "scroll",
  () => {
    if (!floatingDecor) return;
    const y = window.scrollY * 0.06;
    floatingDecor.style.transform = `translateY(${y}px)`;
  },
  { passive: true }
);
