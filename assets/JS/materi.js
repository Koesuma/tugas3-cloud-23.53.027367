
const sidebar = document.querySelector(".materi-sidebar");
const toggle = document.getElementById("sidebarToggle");

toggle.addEventListener("click", function () {
    sidebar.classList.toggle("closed");
});
