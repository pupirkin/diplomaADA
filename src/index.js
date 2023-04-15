 console.log('App working...')


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
