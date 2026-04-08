// ===== FADE IN (FIX BLANK PAGE) =====
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ===== MENU =====
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (toggle && menu) {
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// ===== CURSOR =====
const cursor = document.getElementById("cursor");

if (cursor) {
    document.addEventListener("mousemove", e => {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
    });

    document.addEventListener("mouseover", e => {
        if (e.target.matches("a, img")) {
            cursor.classList.add("cursor-grow");
        }
    });

    document.addEventListener("mouseout", e => {
        if (e.target.matches("a, img")) {
            cursor.classList.remove("cursor-grow");
        }
    });
}

// ===== LIGHTBOX =====
window.addEventListener("load", () => {

    const images = document.querySelectorAll(".foto img");
    const lightbox = document.getElementById("lightbox");

    if (!images.length || !lightbox) return;

    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    let currentIndex = 0;

    function showImage() {
        lightboxImg.src = images[currentIndex].src;
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            showImage();
            lightbox.style.display = "flex";
        });
    });

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    }

    if (nextBtn) nextBtn.onclick = nextImage;
    if (prevBtn) prevBtn.onclick = prevImage;
    if (closeBtn) closeBtn.onclick = () => lightbox.style.display = "none";

});