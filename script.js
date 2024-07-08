const animationContainer = document.getElementById('animation');

const animation = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/home_animation.json'
});

function openDownloadPage() {
    window.location.href = '/download';
}

const bottomSheet = document.getElementById('bottomSheet');

function openBottomSheet(url) {
    console.log("Opening bottom sheet for:", url);
    const content = `Content for ${url} will be loaded here...`;
    bottomSheet.querySelector('.bottom-sheet-content').innerHTML = content;
    bottomSheet.classList.add('active');
}

document.addEventListener('click', function(event) {
    if (!bottomSheet.contains(event.target)) {
        bottomSheet.classList.remove('active');
    }
});
