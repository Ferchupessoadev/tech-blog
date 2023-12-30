const sidebar = document.getElementById("sidebar");
const btnDesktopSidebar = document.getElementById("btn-desktop-sidebar");
btnDesktopSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("toggle-sidebar");
    btnDesktopSidebar.classList.toggle("toogle-btn-sidebar")
})