const galleryContainer = document.getElementById("gallery2");

const fetchAllImages = async () => {
  try {
    const response = await fetch(
      "https://api.accountpluserp.com/addMedia.php?accesskey=12324324hjklsdfghg&limit=*"
    );
    const galleryImages = await response.json();
    console.log(galleryImages);

    if (galleryImages.status === "success") {
      renderGallery(galleryImages.data);
    } else {
      galleryContainer.innerHTML = "<p>Failed to load images.</p>";
    }
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    galleryContainer.innerHTML = "<p>Error loading gallery.</p>";
  }
};

function renderGallery(images) {
  galleryContainer.innerHTML = "";
  images.forEach((img) => {
    const card = document.createElement("div");
    card.classList.add("feature-card");

    const imageUrl = `https://api.accountpluserp.com/Uploads/${img.media}`;
    console.log(imageUrl);

    card.innerHTML = `
      <div class="feature-image">
        <img src="${imageUrl}" alt="${img.title}" loading="lazy">
      </div>
      <h4>${img.title}</h4>
    `;

    galleryContainer.appendChild(card);
  });
}

fetchAllImages();