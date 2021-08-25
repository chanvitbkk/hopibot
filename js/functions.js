const name = document.getElementById('userName');
const email = document.getElementById('userEmail');
const subject = document.getElementById('userSubject');
const message = document.getElementById('userMessage');

const database = firebase.database();
const rootRef = database.ref('users');

addBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    rootRef.child(userName.value).set({
        name: userName.value,
        email: userEmail.value,
        subject: subject.value,
        message = message.value
     });
});


