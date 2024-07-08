document.addEventListener('DOMContentLoaded', () => {
    const animationContainer = document.getElementById('background-animation');

    lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/home_animation.json'
    });
});

function goHome() {
    window.location.href = '/';
}
