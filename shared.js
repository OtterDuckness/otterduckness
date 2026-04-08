// WAIT until page + images are loaded
window.addEventListener("load", () => {

    const images = document.querySelectorAll(".foto img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    if (!images.length || !lightbox) return;

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

    // keyboard
    document.addEventListener("keydown", (e) => {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") lightbox.style.display = "none";
        }
    });

    // swipe
    let startX = 0;

    lightbox.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    lightbox.addEventListener("touchend", e => {
        let diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? nextImage() : prevImage();
        }
    });

});