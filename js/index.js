// Your code goes here

let navLinks = document.querySelectorAll('a');
let header = document.querySelector('header');
let everything = document.querySelector('html');
let allImg = document.querySelectorAll('img');
let allP = document.querySelectorAll('p');
let logo = document.querySelector('.logo-heading');
navLinks.forEach(el => {
    el.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'lightgray';
        event.target.style.borderRadius = '10px';
    })
})

navLinks.forEach(el => {
    el.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = 'white';
    })
})

header.addEventListener('mouseenter', (event)=>{
    event.target.style.backgroundColor = 'gray';
})
header.addEventListener('mouseleave', (event)=>{
    event.target.style.backgroundColor = 'white';
})

everything.addEventListener('keydown', (event)=>{
    alert('Double-click any image to watch it disappear!');
})


allImg.forEach(el => {
    el.addEventListener('dblclick', (event) => {
        event.target.style.display = 'none';
    })
})

everything.addEventListener('auxclick', (event)=>{
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
})

logo.addEventListener('auxclick', (event)=>{
    event.target.style.color = 'black';
})

allImg.forEach(el => {
    el.addEventListener('dragstart', (event) => {
        event.target.style.transform = 'translate(3rem,0)';
    })
})

allImg.forEach(el => {
    el.addEventListener('dragend', (event) => {
        event.target.style.transform = 'translate(-3rem,0)';
    })
})

navLinks.forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

allP.forEach(el=>{
    el.addEventListener('click', (event)=>{
        event.target.style.fontSize = "2rem";
    } )
})

header.addEventListener('click', (event)=>{
    event.target.style.width = '50%';
})

navLinks.forEach(el => {
    el.addEventListener('click', (event) => {
        event.stopPropagation();
    })
})

navLinks.forEach(el => {
    el.addEventListener('drag', (event) => {
        event.target.style.fontSize = '2rem';
    })
})