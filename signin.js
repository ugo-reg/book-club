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

const signupForm = document.getElementById("signin-form");

signupForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {

      alert("Account created: " + userCredential.user.email);
      window.location.href = "review.html";
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
});
