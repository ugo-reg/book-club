import { auth, app } from './signin.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';

// Ensure the user is logged in before accessing the review page
onAuthStateChanged(auth, user => {
    if (!user) {
        window.location.href = "signin.html";
    } else {
        // Get username from localStorage or from user object
        const username = localStorage.getItem("username") || user.email;
        document.getElementById("usernames").innerText = `👋Welcome,
         ${username}!`;
    }
});


