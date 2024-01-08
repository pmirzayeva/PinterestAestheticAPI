// Async function to fetch and display images
async function fetchAndDisplayImages(query = 'random') {
    try {
        const limit = 20;
        const apiKey = 'lLlsrcDmERC7_HQH2D0b_2GUC3dZmrG55Dc4VItiF2I';
        const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}&per_page=${limit}`;
        const response = await fetch(url);
        const { results } = await response.json();
        // console.log({results});

        const box = document.querySelector(".box");
        box.innerHTML = results.map(photo => `<img src="${photo.urls.full}" alt="${photo.alt_description}">`).join('');
    } catch (err) {
        console.error(err);
    }
}

document.querySelector("#searchInput").addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchAndDisplayImages(e.target.value);
    }
});

//default images on page load
fetchAndDisplayImages();

