document.addEventListener("DOMContentLoaded", () => {
	const lightbox = document.getElementById('lightbox');
	const lightboxImg = document.getElementById('lightbox-img');
	const galleryImages = document.querySelectorAll('.gallery img');

	if (lightbox && lightboxImg && galleryImages.length > 0) {
		galleryImages.forEach(img => {
			img.addEventListener('click', () => {
				lightbox.style.display = 'flex';
				lightboxImg.src = img.src;
			});
		});

		lightbox.addEventListener('click', () => {
			lightbox.style.display = 'none';
		});
	}
});
