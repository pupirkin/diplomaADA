 console.log('App working...')

let subMenu = document.getElementById("subMenu");
function toggleMenu() {
  subMenu.classList.toggle("open-menu")
  console.log(subMenu)
}



 // выползание окошечка лог/рег
var wrapper = document.getElementById('wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const bg = document.querySelector('.bg-modal');
const pw = document.querySelector('.page_wrapper');

const btnPopup = document.querySelector('.hih');
const iconClose = document.querySelector('.icon-close');

const btnPopup1 = document.querySelector('.hih1');
btnPopup1.addEventListener( 'click', ()=> {
  wrapper.classList.add( 'active-popup');
  bg.classList.add( 'active');
  pw.classList.add( 'active');
});

registerLink.addEventListener( 'click', ()=> {
  wrapper.classList.add( 'active');
});


loginLink.addEventListener( 'click', ()=> {
  wrapper.classList.remove( 'active');
});

btnPopup.addEventListener( 'click', ()=> {
  wrapper.classList.add( 'active-popup');
  bg.classList.add( 'active');
  pw.classList.add( 'active');
});

iconClose.addEventListener( 'click', ()=> {
  wrapper.classList.remove( 'active-popup');
  bg.classList.remove( 'active');
});
// выползание окошечка лог/рег**

//selecting all required elements
const buttSub = document.querySelector(".buttSub");
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    let filename = file.name;
    dropArea.innerHTML = `<div class="icon"><i class="fas fa-file-alt"></i></div>
                            <header>${filename}</header>`;


    buttSub.innerHTML = `<button class="submit" name="button">submit</button>`;
    }
  else{
    alert("This is not an Excel File!");
    dragText.textContent = "Drag & Drop to Upload File";
  }
};
