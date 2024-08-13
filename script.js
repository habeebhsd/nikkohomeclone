

// Show the popup when the screen is touched
//    document.getElementsByClassName('button').addEventListener('click', function() {
//     document.getElementById('popup').style.display = 'block';
// });


function showPopup() {
    let popup = document.querySelector('.popup');
    popup.classList.add('show-Popup')
}

function showPopup() {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.popup').style.display = 'block';
}

function closePopup() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
}

// Show the popup 5 seconds after the website loads
window.onload = function () {
    setTimeout(showPopup, 5000);
}



const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const closeButton = document.querySelector('.close-button');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    closeButton.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
    nav.classList.remove('open');
    closeButton.classList.remove('open');
});

const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    if (index >= dots.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = dots.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, idx) => {
        dot.classList.remove('active');
        if (idx === currentIndex) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetSlideInterval();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetSlideInterval();
});

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        showSlide(idx);
        resetSlideInterval();
    });
});

function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

startSlideInterval();
showSlide(currentIndex); // Initialize the first slide

// CONTACTFORM

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;

    // This is a mock-up; you'll need a backend or email service to actually send the email
    // alert("Form submitted! Name: " + name + ", Mobile: " + mobile + ", Email: " + email);

    // Here you could send this data to your server using fetch or XMLHttpRequest
    // Example:
    // fetch('your-server-endpoint', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name, mobile, email }),
    // }).then(response => {
    //     return response.json();
    // }).then(data => {
    //     alert('Email sent successfully!');
    // }).catch(error => {
    //     alert('Error sending email');
    // });

     // This script will redirect to another page after 3 seconds
     setTimeout(function thankYou() {
        window.location.href = "http://127.0.0.1:5500/index2.html"; // Replace with your target URL
    }, 1000); // 1000 milliseconds = 1 seconds
});
