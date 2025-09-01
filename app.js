// Array of image objects
const images = [
    { url: 'https://picsum.photos/id/1015/400/300', caption: 'Mountain View', favorite: true },
    { url: 'https://picsum.photos/id/1025/400/300', caption: 'Puppy Love', favorite: false },
    { url: 'https://picsum.photos/id/1035/400/300', caption: 'City Skyline', favorite: true },
    { url: 'https://picsum.photos/id/1045/400/300', caption: 'Beach Vibes', favorite: false },
    { url: 'https://picsum.photos/id/1055/400/300', caption: 'Forest Path', favorite: true },
];

const gallery = document.getElementById('gallery');
const toggleBtn = document.getElementById('toggleMode');
const favoriteBtn = document.getElementById('showFavorites');

let showFavoritesOnly = false;

// Function to render gallery
function renderGallery() {
    gallery.innerHTML = ''; // Clear existing images
    images.forEach(image => {
        if (showFavoritesOnly && !image.favorite) return; // Filter logic

        const card = document.createElement('div');
        card.className = 'image-card';

        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.caption;

        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = image.caption;

        card.appendChild(img);
        card.appendChild(caption);
        gallery.appendChild(card);
    });
}

// Dark/Light mode toggle
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Show Favorites toggle
favoriteBtn.addEventListener('click', () => {
    showFavoritesOnly = !showFavoritesOnly;
    renderGallery();
});

// Initial render
renderGallery();
