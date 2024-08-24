


/* =============== WhatsApp Api =============== */
function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const emailSubject = document.getElementById('email-subject').value;
    const message = document.getElementById('message').value;

    // Construct the WhatsApp message
    const whatsappMessage =
        `*Full Name:* ${fullname}\n` +
        `*Email:* ${email}\n` +
        `*Number:* ${number}\n` +
        `*Email Subject:* ${emailSubject}\n` +
        `*Message:* ${message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp API URL
    const whatsappURL = `https://wa.me/+51955460754?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
}


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});



//Copyright


const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();