// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    fetch("https://script.google.com/macros/s/AKfycbxVjYHW3xx8qiZl38CVk2-orXgTkNYqlssH7TMFkIymUL1asFYrOlC6OClbYGTJSrvW/exec", {
        method: "POST",
        body: new FormData(this)
    })
    .then(response => response.text())
    .then(data => {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        alert("Something went wrong. Please try again.");
    });
});

// Lightbox Functionality
function openLightbox(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Filter Menu Items
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.textContent.trim().toLowerCase();
            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const category = card.getAttribute('data-category').toLowerCase();
                    card.style.display = category === filter ? 'block' : 'none';
                }
            });
        });
    });
});



//Pop for order now button

// Function to Open Popup
function openPopup() {
    document.getElementById("popup").classList.add("show");
}

// Function to Close Popup
function closePopup() {
    document.getElementById("popup").classList.remove("show");
}
