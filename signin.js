import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwPiJYsbTydDmnJAdzx5uXgRBs_TfkCeI",
  authDomain: "gina-s-book-review.firebaseapp.com",
  projectId: "gina-s-book-review",
  storageBucket: "gina-s-book-review.appspot.com",
  messagingSenderId: "289058390830",
  appId: "1:289058390830:web:54af787d441a72ca41b0bf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, app };

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signin-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email1 = document.getElementById("username").value;
      const password1 = document.getElementById("password").value;

      createUserWithEmailAndPassword(auth, email1, password1)
        .then(userCredential => {
        document.getElementById("signup-message").innerText = "Account created: " + userCredential.user.email
        setTimeout (() => { 
        window.location.href = "review.html";
        }, 5000);
        })
        .catch(error => {
          alert("Error: " + error.message);
        });
    });
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
    
      e.preventDefault();
      const email = document.getElementById("name").value;
      const password = document.getElementById("access").value;

      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          document.getElementById("hidden-collapse").innerText="Logged In:" + userCredential.user.email
         setTimeout (() =>   {
         window.location.href = "review.html";
         }, 8000);
        })
        .catch(error => {
          alert("Error: " + error.message);
        });
    });
  }
});
