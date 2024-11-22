let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
        sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add
                ('active')
            })
        }
    })
}




menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

//backend firebase

const firebaseConfig = {
    apiKey: "AIzaSyDgW4AbjIlKU0uOeUw0OSYCme9CMkoA_nY",
    authDomain: "portfolio-384e4.firebaseapp.com",
    databaseURL: "https://portfolio-384e4-default-rtdb.firebaseio.com",
    projectId: "portfolio-384e4",
    storageBucket: "portfolio-384e4.firebasestorage.app",
    messagingSenderId: "838669789",
    appId: "1:838669789:web:d50b05ab98d2811783d234"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactFormDB = firebase.database().ref('contactForm')

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");   
    var email = getElementVal("email");
    var phoneno = getElementVal("phoneno");
    var subject = getElementVal("subject");
    var message = getElementVal("message");
    //checking every field
    if (!name || !email || !phoneno || !subject || !message) {
        // Show alert to fill out all fields
        document.querySelector('.alert').textContent = 'Please fill out all fields before submitting.';
        document.querySelector('.alert').style.display = 'block';

        // Hide success message (in case it was shown earlier)
        setTimeout(() => {
            document.querySelector('.alert').style.display = 'none';
        }, 3000);

        return; // Stop the form submission
    }
    // If all fields are filled, proceed with saving the message (this is a placeholder function)
    saveMessages(name, email, phoneno, subject, message);

    // Show success alert after the message is sent
    document.querySelector('.alert').textContent = 'Your message has been sent!';
    document.querySelector('.alert').style.display = 'block';

    // Remove success alert after 3 seconds
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Reset the form
    document.getElementById("contactForm").reset();
}

// Add event listener for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
    //original code
    //if all field are filled proceed original
    ///saveMessages(name, email, phoneno, subject, message);
    // enable alert
    ///document.querySelector('.alert').style.display = 'block';

    //remove alert
    ///setTimeout(() => {
       /// document.querySelector('.alert').style.display = 'none';
    ///}, 3000);

    // reset the form
    ///document.getElementById("contactForm").reset();
///}

const saveMessages = (name, email, phoneno, subject, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        phoneno: phoneno,
        subject: subject,
        message: message,
    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};