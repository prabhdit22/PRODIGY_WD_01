let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.nav');

menu.onclick=()=>{
 menu.classList.toggle('fa-times');   //ye menu wale icon ko cross me convert kri h 
 navbar.classList.toggle('active');
}

 let image=document.querySelector('.image');
 let image1=document.querySelector('.image1 h1');

//  setTimeout(() => {
//     image1.innerHTML="Welcome To Our Website";   
//  }, 1050);

 let a=setInterval(function(){
    // image1.innerHTML="Welcome To Our Website";  
    image.classList.toggle('image-active');
    // image1.innerHTML="Education For Everyone";
}, 1650);

let head=document.querySelector('.head');

let b=setInterval(function(){
      
    head.classList.toggle('active-head');
   
}, 1650);

// For Loader Section

function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function hideLoader(){
     setTimeout(loader,1900);
  }
  
  hideLoader();

