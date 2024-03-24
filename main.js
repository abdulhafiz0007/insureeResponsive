const elMenuBtn = document.querySelector(".site-header__menu-btn");

elMenuBtn.addEventListener("click", () => {

    const elSiteHeader = elMenuBtn.closest(".site-header");
    elSiteHeader.classList.toggle("active");
    document.body.classList.toggle("scroll-hidden");
})