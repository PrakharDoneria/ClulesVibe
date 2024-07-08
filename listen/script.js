document.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const base64VideoId = urlParams.get('id');

    if (!base64VideoId) {
        alert('No Music ID found');
        return;
    }

    const videoId = atob(base64VideoId); 

    fetchVideoDetails(videoId);
});

async function fetchVideoDetails(videoId) {
    const apiKey = 'AIzaSyDub_aRuEFCV2Fx5iulFQnuM1W_VQ6SzsY';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const video = data.items[0];
            const snippet = video.snippet;
            const title = snippet.title;
            const thumbnails = snippet.thumbnails;
            const highQualityThumbnail = thumbnails.high.url;

            updateVideoDetails(title, highQualityThumbnail);
        } else {
            alert('Music not found.');
        }
    } catch (error) {
        console.error('Error fetching Music details:', error);
        alert('An error occurred while fetching music details. Please try again.');
    }
}

function updateVideoDetails(title, thumbnailUrl) {
    const videoDetailsElement = document.getElementById('video-details');
    videoDetailsElement.innerHTML = `
        <h2 class="text-3xl font-bold mb-2">${title}</h2>
        <img src="${thumbnailUrl}" alt="${title}" class="mx-auto mb-4 blur" style="filter: blur(5px);">
        <a href="https://t.me/ClulesVibe/3" class="button">Download App</a>
    `;
}
