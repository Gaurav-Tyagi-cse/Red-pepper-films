$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
    });
});


// whatshapp

function openWhatsAppChat() {
    // Replace with your phone number in international format
    var phoneNumber = "+919355600766";  // Example: 91 for India, followed by the number
    var message = "Hello, I'm interested in your services!";
    var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

// window.onscroll = function() {
//     let scrollPosition = window.scrollY;
//     let btn = document.querySelector('.button23'); // Use a dot (.) for class selector

//     if (scrollPosition > 1500) {
//         btn.style.display = 'block'; // Show the button when scrolled back up
//     } else {
//         btn.style.display = 'none'; //  Hide the button
//     }
// };


// 





