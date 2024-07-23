
// task 1: selecting and manipulating elements
const div1 = document.getElementById('div1');
div1.innerText = "This is new Content";
div1.textContent  = "This is text contents content";
const classDiv = document.getElementsByClassName('classDiv');

classDiv[0].innerText = 'green'
classDiv[0].style.backgroundColor = 'green';

// task 2: Creating and Appending Elements

const createdDiv = document.createElement('div');
createdDiv.setAttribute('id','createdDiv');
createdDiv.innerText = "This is created dynamically";
document.body.appendChild(createdDiv)

const list = document.getElementById('list');
const listItem1 = document.createElement('li');
listItem1.innerText = "list item 1"
const listItem2 = document.createElement('li');
listItem2.innerText = "list item 2"
list.appendChild(listItem1);
list.appendChild(listItem2);

createdDiv.remove();
// const childNodes = list.childNodes;
// console.log(childNodes)
// childNodes[childNodes.length - 1].remove();
list.childNodes[list.childNodes.length - 1].remove()

// Task 4: MOdifying attributes and Classes

const imageEle = document.getElementById('image');
imageEle.setAttribute('src','IMG_20160303_140702437.jpg');

div1.classList.add("addClass");
div1.classList.remove('addClass');
div1.removeAttribute('class');

// Event handling
const btn = document.getElementById('btn');
btn.addEventListener('click',(e)=>{
    console.log(e.target.innerText);
    e.target.innerText = "clicked";
    const para = document.getElementById('para');
    para.innerText = "This is after clicked para";
})
div1.addEventListener('mouseover',(e)=>{
    console.log(e.target)
    // e.target.style.color = 'red';
    e.target.style.border = '1px solid black'
})


