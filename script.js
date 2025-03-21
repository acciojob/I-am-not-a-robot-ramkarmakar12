//your code here
//your code here
document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("image-container");
    const resetButton = document.getElementById("reset");
    const verifyButton = document.getElementById("verify");
    const message = document.getElementById("h");
    const resultMessage = document.getElementById("para");
    let selectedImages = [];
    
    // Image sources
    const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    let shuffledImages = [...images];
    const duplicate = images[Math.floor(Math.random() * images.length)];
    shuffledImages.push(duplicate);
    shuffledImages = shuffledImages.sort(() => Math.random() - 0.5);

    // Render images
    shuffledImages.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("tile");
        img.dataset.index = index;
        img.addEventListener("click", () => selectImage(img));
        imageContainer.appendChild(img);
    });

    function selectImage(img) {
        if (selectedImages.length < 2 && !selectedImages.includes(img)) {
            selectedImages.push(img);
            img.classList.add("selected");
            resetButton.style.display = "block";
        }
        if (selectedImages.length === 2) {
            verifyButton.style.display = "block";
        }
    }

    verifyButton.addEventListener("click", () => {
        if (selectedImages[0].src === selectedImages[1].src) {
            resultMessage.textContent = "You are a human. Congratulations!";
        } else {
            resultMessage.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
        }
        verifyButton.style.display = "none";
    });

    resetButton.addEventListener("click", () => {
        selectedImages.forEach(img => img.classList.remove("selected"));
        selectedImages = [];
        resetButton.style.display = "none";
        verifyButton.style.display = "none";
        resultMessage.textContent = "";
    });
});
