//Reference for form collection(3)
let formMessage = firebase.database().ref(" hopibot-6ef33-default-rtdb "); //listen for submit event//(1)
document.getElementById(" contactForm ").addEventListener(" submit ", formSubmit);

//Submit form(1.2)
function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector(" #userName ").value;
    let email = document.querySelector(" #userEmail ").value;
    let subject = document.querySelector(" #userSubject ").value;
    let message = document.querySelector(" #userMessage ").value;

    //send message values
    sendMessage(name, email, subject, message);

    //Show Alert Message(5)
    document.querySelector(".alert ").style.display = " block ";

    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
        document.querySelector(" .alert ").style.display = " none ";
    }, 7000);

    //Form Reset After Submission(7)
    document.getElementById(" contactForm ").reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, subject, message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}