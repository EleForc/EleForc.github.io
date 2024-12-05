// Functie om de verborgen afbeelding zichtbaar te maken in de rechterbovenhoek wanneer op de kluis wordt geklikt
document.getElementById('kluis').addEventListener('click', function () {
    const hiddenImage = document.getElementById('hidden-image');
    // Toggle de 'hidden' klasse om de afbeelding zichtbaar te maken
    hiddenImage.classList.toggle('hidden');
});
