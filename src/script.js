/* =========================================================
   MÉTODO AUTORA — script
   WhatsApp e checkout vêm do painel de conteúdo (window.SITE_CONFIG).
   ========================================================= */
const CONFIG = window.SITE_CONFIG || {
  whatsapp: "5511999999999",
  whatsappMessage: "Olá! Vim pelo site e quero saber mais sobre o Método Autora.",
  checkout: "https://pay.exemplo.com.br/seu-produto",
};


/* ---------- Aplica os links de WhatsApp e checkout ---------- */
(function aplicarLinks() {
  const waUrl =
    "https://wa.me/" +
    CONFIG.whatsapp +
    "?text=" +
    encodeURIComponent(CONFIG.whatsappMessage);

  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  document.querySelectorAll("[data-checkout]").forEach((el) => {
    el.setAttribute("href", CONFIG.checkout);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
})();

/* ---------- Sombra na navbar ao rolar ---------- */
const nav = document.getElementById("nav");
const onScroll = () => {
  if (window.scrollY > 12) nav.classList.add("is-scrolled");
  else nav.classList.remove("is-scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Animação de revelação ao rolar ---------- */
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

/* ---------- Ano atual no rodapé ---------- */
const anoEl = document.getElementById("ano");
if (anoEl) anoEl.textContent = new Date().getFullYear();
