//singup

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

  import { getAuth, createUserWithEmailAndPassword,   } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDlHQf3mykAebZCIJVeGZrm8rmG_v_fBPU",
    authDomain: "adadiploma.firebaseapp.com",
    projectId: "adadiploma",
    storageBucket: "adadiploma.appspot.com",
    messagingSenderId: "202838509754",
    appId: "1:202838509754:web:417ad75cf1476f5f579a83"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

  var username =document.getElementById("username")
  var email =document.getElementById("email")
  var password =document.getElementById("password")



  window.signup = function(e){
      e.preventDefault();
      var obj = {
          username:username.value,
          email:email.value,
          passwords:passwords.value,
      }
      createUserWithEmailAndPassword(auth, obj.username, obj.email, obj.passwords)
      .then(function(success){
          alert("Signup Successfully")
      })
      .catch(function(err){
          alert("Error" + err)
      })
      console.log(obj)
  }
// signup **