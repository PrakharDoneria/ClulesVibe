document.addEventListener('DOMContentLoaded', () => {
    fetchRandomImage();
    fetchRandomQuote();
});

function fetchRandomImage() {
    const imageContainer = document.getElementById('image-container');
    fetch('https://source.unsplash.com/collection/190727/800x600')
        .then(response => {
            imageContainer.style.backgroundImage = `url(${response.url})`;
        })
        .catch(error => {
            console.error('Error fetching the image:', error);
            imageContainer.style.backgroundImage = 'url(/path/to/default-404-image.jpg)'; // Fallback image
        });
}

function fetchRandomQuote() {
    const quoteElement = document.getElementById('quote');
    const quotes = [
        "Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything. - Plato",
        "Without music, life would be a mistake. - Friedrich Nietzsche",
        "One good thing about music, when it hits you, you feel no pain. - Bob Marley",
        "Music can change the world because it can change people. - Bono",
        "Where words fail, music speaks. - Hans Christian Andersen"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
}

function goHome() {
    window.location.href = '/';
}
