//singup

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  
  import { getDatabase, set , ref} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
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
  const auth = getAuth()

  var username =document.getElementById("username")
  var email =document.getElementById("email")
  var password =document.getElementById("password")

//   let signupBtn = document.getElementsByClassName("signupinpButton")[0];



//   signupBtn.addEventListener('click', () => {
    
//       var obj = {
//           username:username.value,
//           email:email.value,
//           passwords:password.value,
//       }
//       createUserWithEmailAndPassword(auth, obj.email, obj.passwords)
//       .then(function(success){
//           console.log(obj);

//         //   set(ref(database, 'user/' + user.uid),{
//         //     username:username,
//         //     email:email
//         // })
        
//           alert("Signup Successfully");

        
//       })
//       .catch(function(err){
//           alert("Error" + err);
//       });
//       console.log(obj);
//   })
// signup **


//login

window.login = function(e){
    e.preventDefault();
    var obj = {
        email:emailLog.value,
        password:passwordLog.value
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        console.log(success)
        alert("Loggined Successfully")

    })
    .catch(function(err){
        //window.location.replace('index.html')
        alert("login error " + err)
    })
    console.log(obj)
}

//login **





//edit


  
  
  // reference your database
  
  
  document.getElementById("submitInfo").addEventListener("click", formSave);
  
  function formSave() {

  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var category = getElementVal("category");
  
    saveMessages(name, emailid, category);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    //document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (_name, _emailid, _category) => {
    const db = getDatabase();
  
    set(ref(db, 'userID'),{
      name: _name,
      emailid: _emailid,
      category: _category
    }).then((msg) => {
        alert(msg);
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

//edit **


  
  //firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database
  const database = getDatabase();
  
  // Define a function to search the database
  function searchDatabase(searchValue) {
    // Get a reference to the items node in the database
    const itemsRef = database.ref("items");
  
    // Use the Firebase Realtime Database query API to search for items
    itemsRef.orderByChild("name").startAt(searchValue).endAt(searchValue + "\uf8ff").once("value", snapshot => {
      // The snapshot contains the search results
      const searchResults = snapshot.val();
  
      // Do something with the search results, such as display them on the page
      console.log(searchResults);
    });
  }
  
  // Call the searchDatabase() function when the user submits the search form
  let searchForm = document.getElementsByClassName("searchForm")[0];
  searchForm.addEventListener("submit", event => {
    event.preventDefault();
    const searchInput = document.getElementsByClassName("searchInput")[0];
    const searchValue = searchInput.value;
    searchDatabase(searchValue);
  });


//search**