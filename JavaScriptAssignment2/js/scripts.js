// Name - AMIT GURUNG
// GEORGIAN STUDENT ID - 200591609
// LAKEHEAD STUDENT ID - 1232183
// Client-Side JavaScript
// ASSIGNMENT-2


// Constants
const myStudentId = "Student id - 1232183";
const imageArray = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

let slideshowInterval; // Variable to store the interval ID for the slideshow

// Function to change background color based on user input and display student ID
function changeCustomColor() {
    const numberInput = document.getElementById("customNumber").value;
    const body = document.querySelector("body");

    // Clear previous student ID
    document.getElementById("myStudentId").textContent = '';

    // Display student ID
    document.getElementById("myStudentId").textContent = myStudentId;

    // Change background color based on input
    if (numberInput < 0 || numberInput > 100) {
        body.style.backgroundColor = 'red';
    } else if (numberInput >= 0 && numberInput <= 20) {
        body.style.backgroundColor = 'green';
    } else if (numberInput > 20 && numberInput <= 40) {
        body.style.backgroundColor = 'blue';
    } else if (numberInput > 40 && numberInput <= 60) {
        body.style.backgroundColor = 'orange';
    } else if (numberInput > 60 && numberInput <= 80) {
        body.style.backgroundColor = 'purple';
    } else if (numberInput > 80 && numberInput <= 100) {
        body.style.backgroundColor = 'yellow';
    }
}

// Function to change background color to a random color
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("customNumber").value = randomNumber;
    changeCustomColor();
}

// Function to change background color based on slider value
function changeColorFromSlider() {
    const sliderValue = document.getElementById("colorSlider").value;
    const mappedValue = Math.floor((sliderValue / 360) * 100);
    const body = document.querySelector("body");

    // Change background color based on mapped slider value
    if (mappedValue >= 0 && mappedValue <= 20) {
        body.style.backgroundColor = 'green';
    } else if (mappedValue > 20 && mappedValue <= 40) {
        body.style.backgroundColor = 'blue';
    } else if (mappedValue > 40 && mappedValue <= 60) {
        body.style.backgroundColor = 'orange';
    } else if (mappedValue > 60 && mappedValue <= 80) {
        body.style.backgroundColor = 'purple';
    } else if (mappedValue > 80 && mappedValue <= 100) {
        body.style.backgroundColor = 'yellow';
    }
}

// Function to update the value display of the color slider
function updateSliderValue() {
    const slider = document.getElementById("colorSlider");
    const valueSpan = document.getElementById("sliderValue");
    const mappedValue = Math.floor((slider.value / 360) * 100);
    valueSpan.textContent = mappedValue;
}

// Function to populate the image selection list
function addList() {
    const select = document.getElementById("imageSelect");
    select.innerHTML = '';

    // Add options for each image in the array
    for (let i = 0; i < imageArray.length; i++) {
        const option = document.createElement('option');
        option.value = imageArray[i];
        option.textContent = imageArray[i];
        select.appendChild(option);
    }
}

// Function to change the displayed image
function changeImage() {
    const image = document.getElementById("images");
    const selectedImage = document.getElementById("imageSelect").value;
    image.src = "img/" + selectedImage;
}

// Function to start or stop the slideshow
function toggleSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval); // Stop the slideshow if running
        slideshowInterval = null;
    } else {
        startSlideshow(); // Start the slideshow if not running
    }
}

// Function to start the slideshow with unique effects
function startSlideshow() {
    let currentImageIndex = 0;
    const slideshowIntervalDuration = 3000; // Interval duration in milliseconds
    const effects = ['zoomIn', 'rotateLeft', 'fade', 'slideInRight', 'flip']; // Array of effects
    const images = document.getElementById("images");
    const colorSlider = document.getElementById("colorSlider");

    slideshowInterval = setInterval(() => {
        // Change background color based on slideshow progress
        const mappedValue = Math.floor((currentImageIndex / imageArray.length) * 100);
        if (mappedValue >= 0 && mappedValue <= 20) {
            document.body.style.backgroundColor = 'green';
        } else if (mappedValue > 20 && mappedValue <= 40) {
            document.body.style.backgroundColor = 'blue';
        } else if (mappedValue > 40 && mappedValue <= 60) {
            document.body.style.backgroundColor = 'orange';
        } else if (mappedValue > 60 && mappedValue <= 80) {
            document.body.style.backgroundColor = 'purple';
        } else if (mappedValue > 80 && mappedValue <= 100) {
            document.body.style.backgroundColor = 'yellow';
        }

        // Change the displayed image
        images.src = "img/" + imageArray[currentImageIndex];
        
        // Apply effect to the image
        images.classList.add(effects[currentImageIndex]);
        setTimeout(() => {
            images.classList.remove(effects[currentImageIndex]);
        }, slideshowIntervalDuration);

        // Update the color slider value
        currentImageIndex = (currentImageIndex + 1) % imageArray.length;
        colorSlider.value = currentImageIndex * (360 / imageArray.length);

        // Stop the slideshow if all images have been displayed
        if (currentImageIndex === 0) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        }
    }, slideshowIntervalDuration);
}

// Event listeners for UI interactions
document.getElementById("startSlideshowButton").addEventListener("click", toggleSlideshow);
document.querySelector('.custColor').addEventListener('click', changeCustomColor);
document.querySelector('.randColor').addEventListener('click', changeRandomColor);
document.getElementById('imageSelect').addEventListener('change', changeImage);
document.getElementById('colorSlider').addEventListener('input', changeColorFromSlider);
document.getElementById('colorSlider').addEventListener('input', updateSliderValue);

// Initial call to populate the image selection list
addList();
