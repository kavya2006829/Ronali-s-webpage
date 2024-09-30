let slideIndex = 1;
showSlides(slideIndex);

// Open the Lightbox
function openLightbox() {
  document.getElementById("lightboxModal").style.display = "block";
}

// Close the Lightbox
function closeLightbox() {
  document.getElementById("lightboxModal").style.display = "none";
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("lightbox-slides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    let valid = true;

    // Basic validation
    if (username.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
        alert('All fields are required!');
        valid = false;
    }

    if (valid) {
        alert('Message sent successfully!');
    }
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Send form data to server (replace with your server-side code)
    // For example, you could send an email using a service like Mailgun or SendGrid
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    // Display a success message to the user
    alert("Your message has been sent successfully!");
  });

  var menuArea = document.querySelector(".menu-area");
var isMenuHidden = false;

document.addEventListener("mousemove", function() {
  if (isMenuHidden) {
    menuArea.classList.remove("hidden");
    isMenuHidden = false;
  }
});

window.addEventListener("scroll", function() {
  if (!isMenuHidden && window.scrollY > 100) {
    menuArea.classList.add("hidden");
    isMenuHidden = true;
  }
});