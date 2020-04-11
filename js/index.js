// Your code goes here

// Event 1 mouseover Bus image

let bus = document.querySelector('.intro img');
let body = document.querySelector('body');
bus.addEventListener("mouseover", (e)=>{
    e.target.style.width += "50%" ;
    e.target.style.transform += "rotate(360deg)";  
    e.target.style.transition = "5s";
});


// Event 2 Keydown

const welcome = document.querySelector('.intro h2');
window.addEventListener('keydown', (e)=>{
    welcome.style.backgroundColor = "dodgerblue";
});


// Event 3 Wheel on Let's Go DIV

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
    el.style.transition = "5s";
  }
  
  let scale = 1;
  const el = document.querySelector('.content-section');
  el.onwheel = zoom;


// Event 4 drag/drop

let move = document.querySelector('.adventure');
let container = document.querySelector('.content-section');
// move.style.position ="absolute";

move.addEventListener('dragstart',()=>{
    move.parentElement.style.display = 'flex';
    move.parentElement.style.flexDirection = "column";
    // console.log("moved");
});


// Event 5 load

window.addEventListener('load', ()=>{
    console.log('page is loaded');
})


// Event 6 focus

let focus = document.querySelector('input');
focus.addEventListener('focus',(e)=>{
    e.target.style.color = 'red';
});


// Event 7 resize Browser

function size(){
    let w = document.querySelector("body");
    let size = w.clientWidth;
    alert("The width of your window is: " + size + "px ");
}
window.addEventListener("resize", size);
let a = document.querySelectorAll('a');

// Event 8 scroll
window.addEventListener('scroll',()=>{
    a.forEach((e)=>{
        e.style.fontSize += "10px";
    });
    
});

// Event 9 select
let selected = document.querySelector("input");
let change = document.querySelectorAll("h4");
console.log(selected);
selected.addEventListener("select",(e)=>{
    change.forEach((elem)=>{
        elem.textContent = "Easter Egg!";
    })
    
});

// Event 10 Double click Home button  

const home = document.querySelector('.nav-link');

let ran = function colorGen(){
    return Math.floor(Math.random() * 256);
  }
let isOn = false;
home.addEventListener('dblclick',(e)=>{
    if(isOn === false){
        event.textContent = "YOU CLICKED ME!";
        document.body.style.backgroundColor = "rgb(" + ran() + ", "+ ran() + ", " + ran() + ")";
        isOn = true;
      }
      else{
        event.textContent = "Get Started";
        document.body.style.backgroundColor = "white";
        isOn = false;
      }
      e.stopPropagation();
});

let dest = document.querySelector("nav");
dest.addEventListener('dblclick',()=>{
    dest.style.backgroundColor = "yellow";
});

let prev = document.querySelector("a:nth-of-type(2)");
prev.addEventListener('click',(e)=>{
    e.preventDefault();
})
