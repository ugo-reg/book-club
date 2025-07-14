import { auth, app } from './signin.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';


onAuthStateChanged(auth, user => {
    if (!user) {
        window.location.href = "signin.html";
    } else {
        
        const username = localStorage.getItem("username") || user.email;
        document.getElementById("usernames").innerText = `👋Welcome,
         ${username}!`;
    }
});

const signout1=document.getElementById("logout")
signout1.addEventListener("click", authSignOut)


function authSignOut(){
signOut(auth).then(() => {
    
        window.location.href= "index.html"
}).catch((error) => {
  console.log(error)
});
}
