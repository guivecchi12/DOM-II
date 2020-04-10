// Your code goes here
let bus = document.querySelector('.intro img');
let body = document.querySelector('body');
bus.addEventListener("click", (e)=>{
    e.target.style.width += "50%" ;
    e.target.style.transform += "rotate(45deg)";  
});