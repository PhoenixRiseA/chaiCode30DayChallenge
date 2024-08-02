//  Activity 1: Understanding LocalStorage
// const s1 = "Stored in local storage";
// localStorage.setItem('s1',s1);
// const obj1 = {
//     name: 'Lalith',
//     age: 31,
//     height: '5,11',
// }
// localStorage.setItem('obj1',JSON.stringify(obj1));

// Activity 2: Using LocalStorage

// Task 3: Create a simple form that saves user input

document.addEventListener('DOMContentLoaded',()=>{
    const formId = document.getElementById('form');
    // formId.addEventListener('submit',storeInLocalStorage);
    formId.addEventListener('submit',storeInSessionStorage);
    const removeBtn = document.getElementById('removeBtn');
    // removeBtn.addEventListener('click',removeDetailsFromLocalStorage)
    removeBtn.addEventListener('click',removeDetailsFromSessionStorage)
    // updateDetails()
    updateDetailsWithSession()
    task9("age",31);
    task10()

});
const storeInSessionStorage = (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value,key)=>{
        data[key] = value;
    });
    sessionStorage.setItem('formDetails',JSON.stringify(data));
    updateDetailsWithSession()
}
const storeInLocalStorage = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    // Convert FormData to a regular object
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Log the collected form data
    console.log(data);
    localStorage.setItem('formDetails',JSON.stringify(data));
    updateDetails()
}
const updateDetails = () =>{
    const formDetails = document.getElementById('formDetails');
    const unparsedData = localStorage.getItem('formDetails')
    const formDetailsData = unparsedData ? JSON.parse(unparsedData): '';
    formDetails.innerText = formDetailsData ? `name: ${formDetailsData.name}\n email: ${formDetailsData.email}` : '';
}
const updateDetailsWithSession = () =>{
    const formDetails = document.getElementById('formDetails');
    const unparsedData = sessionStorage.getItem('formDetails')
    const formDetailsData = unparsedData ? JSON.parse(unparsedData): '';
    formDetails.innerText = formDetailsData ? `name: ${formDetailsData.name}\n email: ${formDetailsData.email}` : '';
}
const removeDetailsFromLocalStorage = () =>{
    console.log(JSON.parse(localStorage.getItem('formDetails')))
    localStorage.removeItem('formDetails');
    console.log(JSON.parse(localStorage.getItem('formDetails')))
    updateDetails()
}
const removeDetailsFromSessionStorage = () =>{
    console.log(JSON.parse(sessionStorage.getItem('formDetails')))
    sessionStorage.removeItem('formDetails');
    console.log(JSON.parse(sessionStorage.getItem('formDetails')))
    updateDetailsWithSession()
}
const task9 = (key,value) =>{
    const data = {};
    data[key] = value;
    const validData = JSON.stringify(data)
    localStorage.setItem('task9',validData);
    sessionStorage.setItem('task9',validData);
    console.log(JSON.parse(localStorage.getItem('task9')),JSON.parse(sessionStorage.getItem('task9')));
    if(localStorage.length >0 || sessionStorage.length>0) console.log("Storage is not empty")
        else console.log("Storage is  empty")
};
const task10 = () =>{
    localStorage.clear();
    sessionStorage.clear();
    updateDetailsWithSession();
    if(localStorage.length >0 || sessionStorage.length>0) console.log("Storage is not empty")
        else console.log("Storage is  empty")
}