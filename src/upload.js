  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";
  

  //<script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-storage.js"></script>

  

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
  
  // Get a reference to the storage service
  const storage = getStorage();
  
  // Get a reference to the storage location where you want to upload the file

  
  // Define a function to handle file uploads
  function handleFileUpload(event) {
    const file = event.target.files[0];
  
    // Create a reference to the file in the storage location
    //const fileRef = ref(storage, file.name);
    const storageRef = ref(storage, file.name);
    // Upload the file to Firebase Storage
    uploadBytes(storageRef, file).then(snapshot => {
      console.log("File uploaded successfully!");
    }).catch(error => {
      console.error("Error uploading file:", error);
    });
  }
  
  // Attach an event listener to the file input element
  const fileInput = document.getElementById("fileInput");
  fileInput.addEventListener("change", handleFileUpload);