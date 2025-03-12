
document.querySelector( '#footer-copyright' ).innerHTML = `&copy; ${new Date().getFullYear()} Sunset View - All Rights Reserved.`;

 /* leaflet map*/ 
var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var destinations = [
    { name: 'New York, USA', lat: 40.7128, lon: -74.0060 },
    { name: 'Cairo, Egypt', lat: 30.0444, lon: 31.2357 },
    { name: 'Sydney, Australia', lat: -33.8688, lon: 151.2093 },
    { name: 'London, UK', lat: 51.5074, lon: -0.1278 },
    { name: 'Rome, Italy', lat: 41.9028, lon: 12.4964 },
    { name: 'Bangkok, Thailand', lat: 13.7563, lon: 100.5018 },
    { name: 'Rio de Janeiro, Brazil', lat: -22.9068, lon: -43.1729 },
    { name: 'Dubai, UAE', lat: 25.276987, lon: 55.296249 },
    { name: 'Cape Town, South Africa', lat: -33.9249, lon: 18.4241 },
    { name: 'Moscow, Russia', lat: 55.7558, lon: 37.6173 }, 
    { name: 'Toronto, Canada', lat: 43.65107, lon: -79.347015 },
    { name: 'Singapore', lat: 1.3521, lon: 103.8198 },
    { name: 'Bali, Indonesia', lat: -8.3405, lon: 115.0920 },
    { name: 'Istanbul, Turkey', lat: 41.0082, lon: 28.9784 },
    { name: 'Los Angeles, USA', lat: 34.0522, lon: -118.2437 },
    { name: 'Hong Kong', lat: 22.3193, lon: 114.1694 },
    { name: 'Barcelona, Spain', lat: 41.3874, lon: 2.1686 },
    { name: 'Berlin, Germany', lat: 52.5200, lon: 13.4050 }
];

destinations.forEach(function(dest) {
    var marker = L.marker([dest.lat, dest.lon]).addTo(map);
    marker.bindPopup("<b>" + dest.name + "</b><br> <a href=#>Click here for more information<a>").openPopup();
});

document.getElementById('myform').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission to see Parsley's behaviour

    var form = $(this); /* tell user if the form was valid*/ 
    if (form.parsley().isValid()) {
        alert("Thank you for signing up!");
    } else {
        alert("Email is invalid, please use a valid email address.");
    }
});

/*carousel/glide*/ 
document.addEventListener("DOMContentLoaded", function () {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 10000, // Auto-slide every 10 sec
        hoverpause: true, // Pause on hover :P
        animationDuration: 800, //  animation 
        breakpoints: {
            1024: { perView: 2 },
            768: { perView: 1 }
        }
    }).mount();
});

/*granim gradient*/ 
document.addEventListener("DOMContentLoaded", function () {
    var granimInstance = new Granim({
        element: '#gradient-canvas',
        name: 'granim-gradient',
        direction: 'diagonal', 
        opacity: [1, 1], // Opacity of each gradient transition
        states: {
            "default-state": {
                gradients: [
                    ['#FFA500', '#FF0000'], // Orange to Red
                    ['#0000FF', '#FFFFFF']  // Blue to White
                ],
                transitionSpeed: 4500 // Time for transitions
            }
        }
    });
});

// AOS animations //
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Animation duration
        easing: "ease-in-out", // Smooth animation
        once: true, // Animation runs only once
    });
});



// is jquery loading in? CHECK! 
$(document).ready(function () {
    console.log("jQuery is working!");
});
