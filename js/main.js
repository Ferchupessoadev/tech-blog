// header con ocultamiento inteligente.

const header = document.querySelector("header");
let currentScroll = window.scrollY;
let scrollOld = currentScroll;
document.addEventListener("scroll", () => {
    scrollOld = currentScroll;
    currentScroll = window.scrollY;
    if (currentScroll > scrollOld && currentScroll >= 128) {
        header.classList.add("toggle-header");
    } else if (scrollOld > currentScroll) {
        header.classList.remove("toggle-header");
    }
})


const containerGrid = document.querySelector(".container-cards");

