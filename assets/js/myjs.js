var el = document.getElementById('open');
if(el){
  el.addEventListener('click',
    function(){
      document.querySelector('.bg-modal').style.display='flex';
      document.querySelector('.content-modal').style.display='block';
      });
}

var cl = document.getElementById('close');
if(cl){
  cl.addEventListener('click',
    function(){
      document.querySelector('.bg-modal').style.display='none';
        document.querySelector('.content-modal').style.display='none';
  });
}


var el1 = document.getElementById('open1');
if(el1){
  el1.addEventListener('click',
    function(){
      document.querySelector('.content-modal2').style.display='block';
      document.querySelector('.content-modal').style.display='none';
  });
}

var cl1 = document.getElementById('close1');
if(cl1){
  cl1.addEventListener('click',
    function(){
      document.querySelector('.bg-modal').style.display='none';
      document.querySelector('.content-modal2').style.display='none';
  });
}
