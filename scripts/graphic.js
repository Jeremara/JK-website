document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.getElementById("homeSection");
    const birthdaySection = document.getElementById("birthdaySection");
    const posterSection = document.getElementById("posterSection");
    const moreSection = document.getElementById("moreSection");
    const homeBtn = document.getElementById("homeBtn");
    const darkModeBtn = document.getElementById("darkModeBtn");
    const lightModeBtn = document.getElementById("lightModeBtn");
    const birthdayBtn = document.getElementById("birthdayBtn");
    const posterBtn = document.getElementById("posterBtn");
    const moreBtn = document.getElementById("moreBtn");

    // Replace these image filenames and texts with your own
    const homeImagesData  = [
        { filename: "project-1.jpg", text: "Description for Image 1" },
        { filename: "project-2.jpg", text: "Description for Image 2" },
        { filename: "project-3.jpg", text: "Description for Image 3" },
        { filename: "project-1.jpg", text: "Description for Image 4" },
    ];

    const birthdayImagesData = [
        { filename: "project-1.jpg", text: "Birthday Image 1" },
        { filename: "project-3.jpg", text: "Birthday Image 2" },
        { filename: "project-1.jpg", text: "Birthday Image 3" },
        { filename: "project-2.jpg", text: "Birthday Image 4" },
        { filename: "project-3.jpg", text: "Birthday Image 5" },
        { filename: "project-2.jpg", text: "Birthday Image 6" },
    ];

    const posterImagesData = [
        { filename: "project-3.jpg", text: "Poster Image 1" },
        { filename: "project-2.jpg", text: "Poster Image 2" },
        { filename: "project-1.jpg", text: "Poster Image 3" },
        { filename: "project-3.jpg", text: "Poster Image 4" },
        { filename: "project-2.jpg", text: "Poster Image 5" },
        { filename: "project-1.jpg", text: "Poster Image 6" },
    ];

    const moreImagesData = [
        { filename: "more1.jpg", text: "More Image 1" },
        { filename: "more2.jpg", text: "More Image 2" },
        { filename: "more3.jpg", text: "More Image 3" },
        { filename: "more4.jpg", text: "More Image 4" },
        { filename: "more5.jpg", text: "More Image 5" },
        { filename: "more6.jpg", text: "More Image 6" },
    ];

    // Function to create a gallery and append it to the specified section
    function createImageGallery(section, imagesData) {
        const gallery = document.createElement("div");
        gallery.classList.add("image-gallery");

        imagesData.forEach((data) => {
            const galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");

            const img = document.createElement("img");
            img.src = `images/${data.filename}`;
            img.alt = "Image";

            const textSection = document.createElement("div");
            textSection.classList.add("text-section");
            textSection.textContent = data.text;

            galleryItem.appendChild(img);
            galleryItem.appendChild(textSection);
            gallery.appendChild(galleryItem);
        });

        section.appendChild(gallery);
    }

    // Dark mode and light mode functionality
    darkModeBtn.addEventListener("click", function () {
        document.body.style.backgroundColor = "#111";
    });

    lightModeBtn.addEventListener("click", function () {
        document.body.style.backgroundColor = "#f0f0f0";
    });

    // Section navigation functionality
    homeBtn.addEventListener("click", function () {
        hideAllSections();
        homeSection.style.display = "block";
        createImageGallery= (homeSection, homeImagesData);
    });

    birthdayBtn.addEventListener("click", function () {
        hideAllSections();
        birthdaySection.style.display = "grid";
        createImageGallery(birthdaySection, birthdayImagesData);
    });

    posterBtn.addEventListener("click", function () {
        hideAllSections();
        posterSection.style.display = "grid";
        createImageGallery(posterSection, posterImagesData);
    });

    moreBtn.addEventListener("click", function () {
        hideAllSections();
        moreSection.style.display = "block";
        createImageGallery(moreSection, moreImagesData);
    });

    // Function to hide all sections
    function hideAllSections() {
        galleryContainer.style.display = "none";
        birthdaySection.style.display = "none";
        posterSection.style.display = "none";
        moreSection.style.display = "none";
    }
});
