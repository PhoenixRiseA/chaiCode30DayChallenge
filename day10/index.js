// Basic Event Handling

const btn = document.getElementById('btn');
const para = document.getElementById('para');
btn.addEventListener('click',()=>{
    para.innerText = "This is content after click"
})
const btnDb = document.getElementById('btnDb');
const image1 = document.getElementById('image1');
btnDb.addEventListener('dblclick',()=>{
    if(image1.style.visibility === 'hidden'){
        image1.style.visibility = "visible";
    }else {
        image1.style.visibility = 'hidden';
    }
});

// Mouse events
para.addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor = 'yellow'
});
para.addEventListener('mouseout',(e)=>{
    e.target.style.backgroundColor = '#fff'
});
const input1 = document.getElementById('input1');
// input1.addEventListener("keydown",(e)=>{
//     console.log(e.target.value)
// })
input1.addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    if(e.target.value){
        para.innerText = e.target.value;
    }
})
const submitHandler = (event)=>{
    event.preventDefault();
    console.log(event)
}
const selectPara = document.getElementById('forSelect');
const selectChange = (event)=>{
    selectPara.innerText = event.target.value;
};

// Event Delegation
const ulist = document.querySelector('#ulist');
ulist.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        console.log(e.target.innerText);
    }
})
const addBtn = document.getElementById('add');


addBtn.addEventListener('click',()=>{
    const len =ulist.getElementsByTagName('li').length
    const li = document.createElement('li');
    li.innerText = `List item ${len + 1}`  
    ulist.appendChild(li);

})