// MENU (works everywhere)
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (toggle && menu) {
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// CURSOR (desktop only)
if (window.innerWidth > 768) {
    const cursor = document.getElementById("cursor");

    if (cursor) {
        document.addEventListener("mousemove", e => {
            cursor.style.top = e.clientY + "px";
            cursor.style.left = e.clientX + "px";
        });

        document.addEventListener("mouseover", e => {
            if (e.target.matches("a, img, button")) {
                cursor.classList.add("cursor-grow");
            }
        });

        document.addEventListener("mouseout", () => {
            cursor.classList.remove("cursor-grow");
        });
    }
}

// FADE
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});