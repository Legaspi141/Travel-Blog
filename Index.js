/* IMAGES GLOW EFFECT START */

document.querySelectorAll('.Main-images').forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList.add('glow');
    });

    image.addEventListener('mouseout', () => {
        image.classList.remove('glow');
    });
});

/* IMAGES GLOW EFFECT END */

/* TRAVEL TEXT START */

const textElement = document.querySelector('.travel-text');

        const fonts = [
            "'Numans', sans-serif",
            "'Barrio', cursive",
            "'Modak', cursive",
            "'Atma', cursive",
            "'Flavors', cursive",
            "'Finger Paint', cursive",
            "'Rubik Vinyl', cursive",
            "'Honk', cursive",
            "'Bungee Spice', cursive",
            "'Shojumaru', cursive"
        ];

        let currentIndex = 0;

        function changeFont() {
            currentIndex = (currentIndex + 1) % fonts.length;
            textElement.style.fontFamily = fonts[currentIndex];
        }

        setInterval(changeFont, 500);

/* TRAVEL TEXT END */