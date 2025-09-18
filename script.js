// 야간 모드
document.getElementById("toggle-dark").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// 아코디언
document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const acc = btn.closest(".accordion"); // 버튼이 속한 .accordion
        if (!acc) return;
        acc.classList.toggle("show");
    });
});

// 현재 섹션 하이라이트 (IntersectionObserver)
const links = document.querySelectorAll(".top-nav .nav-links a");
const sections = [...document.querySelectorAll("main section")];

const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
        }
    });
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

sections.forEach(s => obs.observe(s));

// Top 버튼
const toTop = document.getElementById("to-top");
window.addEventListener("scroll", () => {
    toTop.classList.toggle("show", window.scrollY > 600);
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// 모바일 nav-links 스크롤 힌트 (왼쪽 페이드)
const navLinks = document.querySelector('.top-nav .nav-links');
if (navLinks) {
    const updateNavFade = () => {
        navLinks.classList.toggle('scrolled', navLinks.scrollLeft > 0);
    };
    navLinks.addEventListener('scroll', updateNavFade);
    window.addEventListener('resize', updateNavFade);
    updateNavFade();
}