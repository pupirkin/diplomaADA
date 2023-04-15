 console.log('App working...')

setInterval(stopCheckingForUpdates, 400);

 // setInterval() returns a value that we can use to stop the repeated
 // invocations by calling clearInterval(). (Similarly, setTimeout()
 // returns a value that you can pass to clearTimeout())
 function stopCheckingForUpdates() {
   if ($(window).width() < 960) {

        var e1 = document.querySelector('.search__input');
        e1.style.width = "500px";

        var e1 = document.querySelector('.preview-zone');
        e1.style.width = "600px";

   }
   else {
     var e1 = document.querySelector('.search__input');
     e1.style.width = "600px";
     var e1 = document.querySelector('.preview-zone');
     e1.style.width = "700px";
   }

   if ($(window).width() < 769) {

        var e1 = document.querySelector('.search__form');
        e1.style.display = "inline-block";

        var e1 = document.querySelector('.preview-zone');
        e1.style.width = "auto";

        var e1 = document.querySelector('.search__input');
        e1.style.width = "100%";

        var e1 = document.querySelector('.search__btn-submit');
        e1.style.width = "100%";

        var e1 = document.querySelector('.probel');
        e1.style.height = "5px";
   }
   else {
     var e1 = document.querySelector('.search__form');
     e1.style.display = "flex";

     var e1 = document.querySelector('.preview-zone');
     e1.style.width = "700px";

     var e1 = document.querySelector('.search__input');
     e1.style.width = "600px";

     var e1 = document.querySelector('.search__btn-submit');
     e1.style.width = "80px";

     var e1 = document.querySelector('.probel');
     e1.style.height = "0px";
   }

 };
stopCheckingForUpdates();



 // выползание окошечка лог/рег
 var wrapper = document.getElementById('wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const bg = document.querySelector('.bg-modal');
const pw = document.querySelector('.page_wrapper');

console.log(document);
const btnPopup = document.querySelector('.hih');
const iconClose = document.querySelector('.icon-close');

const btnPopup1 = document.querySelector('.hih1');
btnPopup1.addEventListener( 'click', ()=> {
  console.log("hi");
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
  console.log("hi");
  wrapper.classList.add( 'active-popup');
  bg.classList.add( 'active');
  pw.classList.add( 'active');
});

iconClose.addEventListener( 'click', ()=> {
  wrapper.classList.remove( 'active-popup');
  bg.classList.remove( 'active');
});

// выползание окошечка лог/рег**
